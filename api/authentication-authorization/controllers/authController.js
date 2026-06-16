const bcrypt = require("bcryptjs");
const users = require("../data/users");

const { generateToken } = require("../utils/generateToken");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const token = generateToken(user);

  res.status(200).json({
    token
  });
};

module.exports = { login };