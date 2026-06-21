const express = require("express");

const {
    userProxy,
    productProxy,
    orderProxy
} = require(
    "./proxyMiddleware"
);

const app = express();

app.use("/users", userProxy);

app.use("/products", productProxy);

app.use("/orders", orderProxy);

app.get("/", (req, res) => {
    res.json({
        message:
        "API Gateway Running"
    });
});

app.listen(3000, () => {
    console.log(
        "Gateway running on 3000"
    );
});