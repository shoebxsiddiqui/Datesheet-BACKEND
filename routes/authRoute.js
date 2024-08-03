const express = require("express");
const router = express.Router();
const employeeModel = require("../models/employeeModel");
const managerModel = require("../models/managerModel");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { generateToken } = require("../utils/jwt-token");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/authController");
const { isLoggedIn } = require("../middleware/isLoggedIn");

router.post("/register", registerUser);

router.get("/login", isLoggedIn, loginUser);

router.get("/logout", logoutUser);

module.exports = router;
