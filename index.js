const http  = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    // let path = './views';
    res.write('Hello World');
    res.end();
});

server.listen(3000,'localhost', () => {
    console.log('server is running on port 3000');
});