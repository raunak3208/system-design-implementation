const http = require("http");

http.createServer((req, res) => {
    res.end("Response from Server 2");
}).listen(3002);