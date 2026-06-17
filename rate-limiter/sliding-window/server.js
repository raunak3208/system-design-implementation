const express = require("express");

const SlidingWindowLimiter =
require("./slidingWindow");

const app = express();

const limiter =
new SlidingWindowLimiter(
    5,
    60 * 1000
);

app.get("/", (req, res) => {

    const ip = req.ip;

    if (!limiter.allowRequest(ip)) {
        return res.status(429).json({
            message: "Rate limit exceeded"
        });
    }

    res.status(200).json({
        message: "Request accepted"
    });
});

app.listen(3000, () => {
    console.log(
        "Sliding Window running on port 3000"
    );
});