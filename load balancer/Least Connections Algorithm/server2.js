const http = require("http");

http.createServer((req, res) => {

    setTimeout(() => {
        res.end("Response from Server 2");
    }, 2000);

}).listen(3002);