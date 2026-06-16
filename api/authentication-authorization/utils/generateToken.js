const jwt = require("jsonwebtoken");

const SECRET = "system-design-secret";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role
    },
    SECRET,
    {
      expiresIn: "1h"
    }
  );
};

module.exports = {
  generateToken,
  SECRET
};