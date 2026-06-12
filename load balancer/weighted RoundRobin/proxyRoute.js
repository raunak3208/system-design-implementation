const express = require("express");
const router = express.Router();

const servers = require("../config/servers");
const WeightedRoundRobin = require("../algorithms/weightedRoundRobin");

const loadBalancer = new WeightedRoundRobin(servers);

router.get("/", (req, res) => {
  try {
    const server = loadBalancer.getNextServer();

    res.json({
      algorithm: "Smooth Weighted Round Robin",
      selectedServer: server.id,
      target: server.url
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;