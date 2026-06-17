const express = require("express");

const TokenBucket =
require("./tokenBucket");

const app = express();

const bucket =
new TokenBucket(
    10,
    2
);

app.get("/", (req, res) => {

    if (!bucket.allowRequest()) {

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
        "Token Bucket running on port 3000"
    );
});