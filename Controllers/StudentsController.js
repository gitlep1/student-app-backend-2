const express = require("express");
const { getAllStudents, getStudentById } = require("../Queries/StudentsQuerie");

const students = express.Router();

students.get("/", (req, res) => {
  try {
    const students = getAllStudents();
    res.status(200).json({ payload: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

students.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentById(id);
    res.status(200).json({ payload: student });
  } catch (err) {
    res.status(404).json({ error: `No student with id: ${id}` });
  }
});

module.exports = students;
