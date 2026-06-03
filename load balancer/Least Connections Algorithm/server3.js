const http = require("http");

http.createServer((req, res) => {

    setTimeout(() => {
        res.end("Response from Server 3");
    }, 1000);

}).listen(3003);