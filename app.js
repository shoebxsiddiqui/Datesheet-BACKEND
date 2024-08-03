const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./config/database-connection");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Home"));

app.use("/auth", authRoute);

connectDatabase();

app.listen(3000);
