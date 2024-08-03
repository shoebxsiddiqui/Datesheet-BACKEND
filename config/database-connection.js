const mongoose = require("mongoose");

module.exports.connectDatabase = () =>
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err.message));
