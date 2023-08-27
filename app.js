const express = require("express");
const cors = require("cors");

const StudentsController = require("./Controllers/StudentsController");
const StudentsControllerV2 = require("./Controllers/V2/StudentsControllerV2");

const app = express();

app.use(cors());

app.use("/students", StudentsController);
app.use("/v2/students", StudentsControllerV2);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

module.exports = app;
