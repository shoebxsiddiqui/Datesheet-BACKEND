const mongoose = require("mongoose");

const sheetSchema = mongoose.Schema({
  title: String,
  description: String,
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
});

module.exports = mongoose.model("sheet", sheetSchema);
