const employeeModel = require("../models/employeeModel");
const managerModel = require("../models/managerModel");

module.exports.all = async function (req, res) {
  try {
    const users = await employeeModel.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
};
