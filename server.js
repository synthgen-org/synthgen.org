require('dotenv').config(); 

const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = {
    "type": "service_account",
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "token_uri": process.env.FIREBASE_AUTH_DOMAIN,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_DOMAIN,
    "client_x509_cert_url": process.env.FIREBASE_AUTH_DOMAIN
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
  });

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle form submissions
app.post('/submit-contact', (req, res) => {
    try {
        // Process the form data and send a response
        // (You can perform any necessary processing here)
        const { name, email, message } = req.body;
        console.log('Form Data:', { name, email, message });

        // Render the thank-you component
        const thankYouContent = fs.readFileSync(path.join(__dirname, 'public', 'thank-you.html'), 'utf8');
        res.send(thankYouContent);
    } catch (error) {
        console.error('Error processing form:', error);
        res.status(500).send('Internal Server Error');
    }
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
