//console.log("Hello, World!");
//const Joe = require('./test');
//console.log(new Joe("Joe", 30).greet());


import http from 'http';
import fs from 'fs/promises';
import url from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const __filename = new URL('index.js', import.meta.url).pathname;

console.log(`Directory: ${__dirname}`);
console.log(`File: ${__filename}`);

const server = http.createServer(async (req, res) => {
    let filePath;
    if (req.url === '/') {
        filePath = `index.html`;
    }
    else if (req.url === '/about') {
        filePath = `about.html`;
    }
    else if (req.url === '/contact-me') {
        filePath = `contact-me.html`;
    }
    else {
        filePath = `404.html`;
    }
    const data = await fs.readFile(filePath)
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(data);
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});