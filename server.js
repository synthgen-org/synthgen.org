const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Determine the file path
    const filePath = req.url === '/' ? '/index.html' : req.url;
    const fileExtension = path.extname(filePath).substring(1);
    const contentType = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'text/javascript',
    }[fileExtension] || 'application/octet-stream';

    // Read the file and serve it
    fs.readFile(path.join(__dirname, 'public', filePath), (err, data) => {
        if (err) {
            // Check if the request is for a non-existing file
            if (req.url !== '/' && !req.url.includes('.')) {
                // Serve the main HTML file for non-existing routes
                return fs.readFile(path.join(__dirname, 'public', '/index.html'), (err, data) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/plain' });
                        res.end('Not Found');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
            }

            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
