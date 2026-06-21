const express = require("express");

const app = express();

app.get("/users", (req, res) => {
    res.json({
        service: "User Service",
        users: [
            { id: 1, name: "Raunak" },
            { id: 2, name: "John" }
        ]
    });
});

app.listen(4001, () => {
    console.log(
        "User Service running on 4001"
    );
});