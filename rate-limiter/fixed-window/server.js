const express = require("express");

const FixedWindowLimiter =
require("./fixedWindow");

const app = express();

const limiter =
new FixedWindowLimiter(
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
        "Fixed Window running on port 3000"
    );
});