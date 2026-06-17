const express = require("express");

const LeakyBucket =
require("./leakyBucket");

const app = express();

const bucket =
new LeakyBucket(
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
        "Leaky Bucket running on port 3000"
    );
});