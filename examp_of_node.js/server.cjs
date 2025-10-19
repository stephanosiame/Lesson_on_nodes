// import { createServer } from 'node:http';
const {createServer } = require('node:http')
const hostname = '127.0.0.1';
const port = 3000;

const serve= createServer((req, res) => {
    req.statusCode = 404;
    res.setHeader('contentType', 'text-plain');
    res.end("Hello, Steph");
});

serve.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})