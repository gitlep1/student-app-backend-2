const express = require("express");
const studentData = require("./StudentData.json");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.get("/students", (req, res) => {
  try {
    const { students } = studentData;
    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    res.status(200).json({ data: student });
  } catch (err) {
    res.status(404).json({ error: `No student with id: ${id}` });
  }
});

module.exports = app;
