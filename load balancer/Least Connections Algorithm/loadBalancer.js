const http = require("http");

const servers = [
    {
        url: "http://localhost:3001",
        connections: 0
    },
    {
        url: "http://localhost:3002",
        connections: 0
    },
    {
        url: "http://localhost:3003",
        connections: 0
    }
];

// Find server with minimum connections
function getLeastConnectionServer() {

    let minServer = servers[0];

    for (let i = 1; i < servers.length; i++) {

        if (servers[i].connections < minServer.connections) {
            minServer = servers[i];
        }
    }

    return minServer;
}

const loadBalancer = http.createServer((req, res) => {

    // Select server
    const server = getLeastConnectionServer();

    // Increase active connections
    server.connections++;

    console.log(
        `Forwarding to ${server.url} | Active Connections: ${server.connections}`
    );

    const proxy = http.request(
        server.url + req.url,
        {
            method: req.method,
            headers: req.headers
        },
        (proxyRes) => {

            res.writeHead(
                proxyRes.statusCode,
                proxyRes.headers
            );

            proxyRes.pipe(res, {
                end: true
            });

            // Request completed
            proxyRes.on("end", () => {
                server.connections--;

                console.log(
                    `${server.url} completed request | Active: ${server.connections}`
                );
            });
        }
    );

    req.pipe(proxy, {
        end: true
    });

    proxy.on("error", (err) => {

        server.connections--;

        console.log("Server Error:", err.message);

        res.statusCode = 500;
        res.end("Backend server failed");
    });
});

loadBalancer.listen(8000, () => {
    console.log("Least Connections Load Balancer running on 8000");
});