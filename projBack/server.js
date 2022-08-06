const express = require("express");
const app = express();
const mongoose = require("mongoose");

const routesUrls = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();

// dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("database connected")
);
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(4000, () => console.log("server is running"));
