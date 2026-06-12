const express = require("express");

const proxyRoute = require("./routes/proxyRoute");

const app = express();

app.use("/", proxyRoute);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Load Balancer running on port ${PORT}`);
});