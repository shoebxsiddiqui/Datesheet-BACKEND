const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const managerRoute = require("./routes/managerRoute");
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./config/database-connection");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Home"));
app.get("/babayaga", (req, res) => res.send("babayaga"));

app.use("/auth", authRoute);
app.use("/manager", managerRoute);

connectDatabase();

app.listen(3000);
