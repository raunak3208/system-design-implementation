const express = require("express");

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("REST API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});