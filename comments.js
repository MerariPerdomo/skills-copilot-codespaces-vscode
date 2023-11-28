//create a web server with node.js
//-----------------------------
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
//-----------------------------
// Web server
//-----------------------------
http.createServer(function (req, res) {
    //console.log(req.url);
    //console.log(req.method);
    //-----------------------------
    // Routing
    //-----------------------------
    const parsedUrl = url.parse(req.url);
    //console.log(parsedUrl);
    //-----------------------------
    // Routing
    //-----------------------------
    switch (parsedUrl.pathname) {
        case '/':
            fs.readFile('index.html', 'utf-8', function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }); //end of readFile
            break;
        case '/about':
            fs.readFile('about.html', 'utf-8', function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }); //end of readFile
            break;  
        case '/contact':
            fs.readFile('contact.html', 'utf-8', function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }); //end of readFile
            break;
        case '/login':
            fs.readFile('login.html', 'utf-8', function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }); //end of readFile
            break;
    }
});
