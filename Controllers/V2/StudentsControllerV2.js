const express = require("express");
const {
  getAllStudentsV2,
  getStudentByIdV2,
} = require("../../Queries/V2/StudentsQueriesV2");

const studentsControllerV2 = express.Router();

studentsControllerV2.get("/", (req, res) => {
  try {
    const students = getAllStudentsV2();
    res.status(200).json({ payload: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentByIdV2(id);
    res.status(200).json({ payload: student });
  } catch (err) {
    res.status(404).json({ error: `No student with id: ${id}` });
  }
});

module.exports = studentsControllerV2;
