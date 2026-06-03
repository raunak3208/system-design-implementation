const http = require("http");

http.createServer((req, res) => {
    res.end("Response from Server 3");
}).listen(3003);