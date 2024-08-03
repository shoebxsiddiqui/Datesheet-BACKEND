const employeeModel = require("../models/employeeModel");
const managerModel = require("../models/managerModel");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { generateToken } = require("../utils/jwt-token");

module.exports.registerUser = async function (req, res) {
  try {
    const { name, email, password, role } = req.body;

    let user = await employeeModel.findOne({ email });
    if (!user) user = await managerModel.findOne({ email });
    if (user !== null) return res.send("Already registered");

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    if (role === "employee")
      user = await employeeModel.create({
        name,
        email,
        password: encryptedPassword,
      });
    else
      user = await managerModel.create({
        name,
        email,
        password: encryptedPassword,
      });

    const token = generateToken(user);
    res.cookie("token", token);

    res.send("User Created successfully");
  } catch (err) {
    res.send(err);
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;

    let user = await employeeModel.findOne({ email });
    if (!user) user = await managerModel.findOne({ email });
    if (user === null) return res.send("Email or Password is incorrect");

    if (!(await bcrypt.compare(password, user.password)))
      return res.send("Password is incorrect");

    const token = generateToken(user);
    res.cookie("token", token);

    res.send("Logged In successfully");
  } catch (err) {
    res.send(err);
  }
};

module.exports.logoutUser = async function (req, res) {
  try {
    res.clearCookie("token");
    res.send("logged out successfully");
  } catch (err) {
    res.send(err);
  }
};
