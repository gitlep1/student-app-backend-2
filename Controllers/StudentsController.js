const express = require("express");
const { getAllStudents, getStudentById } = require("../Queries/StudentsQuerie");

const studentsController = express.Router();

studentsController.get("/", (req, res) => {
  try {
    const students = getAllStudents();

    if (students) {
      return res.status(200).json({ payload: students });
    } else {
      return res.status(404).json({ error: "Could not find students" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

studentsController.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentById(id);

    if (student) {
      return res.status(200).json({ payload: student });
    } else {
      return res.status(404).json({ error: `No student with id: ${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = studentsController;
