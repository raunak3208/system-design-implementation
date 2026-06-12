const http = require("http");

http.createServer((req, res) => {

    setTimeout(() => {
        res.end("Response from Server 1");
    }, 4000);

}).listen(3001);