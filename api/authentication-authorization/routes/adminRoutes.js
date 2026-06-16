const express = require("express");

const authenticate = require(
  "../middleware/authenticate"
);

const authorize = require(
  "../middleware/authorize"
);

const router = express.Router();

router.get(
  "/dashboard",
  authenticate,
  authorize("admin"),
  (req, res) => {
    res.json({
      message:
        "Welcome Admin Dashboard"
    });
  }
);

module.exports = router;