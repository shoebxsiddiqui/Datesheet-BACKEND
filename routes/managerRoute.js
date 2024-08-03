const express = require("express");
const router = express.Router();
const employeeModel = require("../models/employeeModel");
const managerModel = require("../models/managerModel");
const { all } = require("../controller/managerController");

router.get("/all", all);

module.exports = router;
