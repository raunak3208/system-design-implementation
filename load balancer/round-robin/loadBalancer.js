const http = require("http");

// Backend servers
const servers = [
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003"
];

// Pointer for round robin
let current = 0;

const loadBalancer = http.createServer((req, res) => {

    // Select server using Round Robin
    const target = servers[current];

    // Move pointer to next server
    current = (current + 1) % servers.length;

    console.log(`Forwarding request to ${target}`);

    // Forward request
    const proxy = http.request(
        target + req.url,
        {
            method: req.method,
            headers: req.headers
        },
        (proxyRes) => {

            // Send backend response to client
            res.writeHead(
                proxyRes.statusCode,
                proxyRes.headers
            );

            proxyRes.pipe(res, {
                end: true
            });
        }
    );

    // Pipe request body
    req.pipe(proxy, {
        end: true
    });

    // Error handling
    proxy.on("error", (err) => {
        console.log("Server error:", err.message);

        res.statusCode = 500;
        res.end("Server unavailable");
    });
});

// Start load balancer
loadBalancer.listen(8000, () => {
    console.log("Load Balancer running on port 8000");
});