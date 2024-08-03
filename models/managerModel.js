const mongoose = require("mongoose");

const managerSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
    },
  ],
});

module.exports = mongoose.model("manager", managerSchema);
