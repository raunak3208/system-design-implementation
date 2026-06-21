const express = require("express");

const app = express();

app.get("/products", (req, res) => {
    res.json({
        service: "Product Service",
        products: [
            {
                id: 1,
                name: "Laptop"
            },
            {
                id: 2,
                name: "Phone"
            }
        ]
    });
});

app.listen(4002, () => {
    console.log(
        "Product Service running on 4002"
    );
});