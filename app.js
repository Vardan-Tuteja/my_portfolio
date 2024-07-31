const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/download_resume', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'resume.pdf');
    res.download(filePath);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
