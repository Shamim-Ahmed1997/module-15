const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the Home Page');
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the About Page');
        } else if (req.url === '/contact') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the Contact Page');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    } else if (req.method === 'POST' && req.url === '/file-write') {
        // Handle file writing
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File created and written successfully');
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start the server on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
