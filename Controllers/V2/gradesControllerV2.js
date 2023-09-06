const express = require("express");

const {
  getAllGradesV2,
  getGradesByIdV2,
} = require("../../Queries/V2/GradesQueriesV2");

const gradesControllerV2 = express.Router();

gradesControllerV2.get("/", (req, res) => {
  try {
    const allGrades = getAllGradesV2();
    if (allGrades) {
      return res.status(200).json({ payload: allGrades });
    } else {
      res.status(404).json({ error: "Could not find grades" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

gradesControllerV2.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const grade = getGradesByIdV2(id);

    if (grade) {
      return res.status(200).json({ payload: grade });
    }

    return res
      .status(404)
      .json({ error: `Could not find grade with id: ${id}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = gradesControllerV2;
