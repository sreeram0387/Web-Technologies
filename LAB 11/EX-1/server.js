const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/' && req.method === 'GET') {
        res.write('<h1>Welcome to Home Page</h1>');
        res.write('<p>This is a simple Node.js server</p>');
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.write('<h1>About Page</h1>');
        res.write('<p>This server is built using Node.js without any frameworks.</p>');
    } 
    else if (req.url === '/contact' && req.method === 'GET') {
        res.write('<h1>Contact Page</h1>');
        res.write('<p>Email: example@gmail.com</p>');
    } 
    else {
        res.statusCode = 404;
        res.write('<h1>404 - Page Not Found</h1>');
    }

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});