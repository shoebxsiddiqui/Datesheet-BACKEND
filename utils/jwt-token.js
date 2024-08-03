const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_TOKEN,
    { expiresIn: "5d" }
  );
  return token;
};

module.exports.generateToken = generateToken;
