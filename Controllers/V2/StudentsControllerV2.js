const express = require("express");

const {
  getAllStudentsV2,
  getAllStudentsWithGradesV2,
  getStudentByIdV2,
} = require("../../Queries/V2/StudentsQueriesV2");

const { getGradesByStudentIdV2 } = require("../../Queries/V2/GradesQueriesV2");

const studentsControllerV2 = express.Router();

studentsControllerV2.get("/", (req, res) => {
  try {
    const { include } = req.query;
    if (include === "grades") {
      const students = getAllStudentsWithGradesV2();
      return res.status(200).json({ payload: students });
    } else {
      const students = getAllStudentsV2();
      return res.status(200).json({ payload: students });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentByIdV2(id);

    if (student) {
      return res.status(200).json({ payload: student });
    }

    res.status(404).json({ error: `Could not find student with id: ${id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get("/:id/grades", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentByIdV2(id);

    if (student) {
      const grades = getGradesByStudentIdV2(id);
      return res.status(200).json({ payload: grades });
    }

    res.status(404).json({ error: `Could not find student with id: ${id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = studentsControllerV2;
