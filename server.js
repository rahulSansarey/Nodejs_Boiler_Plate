const mongoose = require("mongoose");
const express = require("express");
// Creating an instance of express as app
const app = express();
require("dotenv").config();

// Import Db from db.js
const db = require("./db");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Helloworld");
});

// Imporrting Routes
const test = require("./routes/test.js");

app.use("/res", test);

app.listen(PORT, () => {
  console.log("server is running on port", { PORT });
});
