require('dotenv').config(); 

const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle form submissions
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Perform any necessary processing here
    // For now, let's just log the form data
    console.log('Form Data:', { name, email, message });

    // TODO: Process the form data and send a response
    // For demonstration, let's assume the form is always successful
    const responseMessage = `Thank you, ${name}! We have received your message.`;

    // Read the "thank-you.html" file
    fs.readFile(path.join(__dirname, 'public', 'thank-you.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            // Replace the placeholder in the HTML with the actual message
            const thankYouPage = data.replace('{{message}}', responseMessage);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(thankYouPage);
        }
    });
});

// Fallback to serving the main HTML file for non-existing routes
app.get('*', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.ENVIRONMENT || "UNKNOWN";
console.log("Environment is " + ENVIRONMENT);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
