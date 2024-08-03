const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
  },
  sheets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sheet",
    },
  ],
});

module.exports = mongoose.model("employee", employeeSchema);
