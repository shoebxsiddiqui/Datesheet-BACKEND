const jwt = require("jsonwebtoken");
const employeeModel = require("../models/employeeModel");
const managerModel = require("../models/managerModel");

module.exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.send("Please login first");
  else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await employeeModel.findOne({ email: decoded.email });
    if (user === null)
      user = await managerModel.findOne({ email: decoded.email });

    req.user = user;
  }

  next();
};
