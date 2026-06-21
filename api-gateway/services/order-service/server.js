const express = require("express");

const app = express();

app.get("/orders", (req, res) => {
    res.json({
        service: "Order Service",
        orders: [
            {
                id: 101,
                amount: 500
            }
        ]
    });
});

app.listen(4003, () => {
    console.log(
        "Order Service running on 4003"
    );
});