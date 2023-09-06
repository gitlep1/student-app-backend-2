const gradesV2 = require("../../data/V2/GradesDataV2.json");

const getAllGradesV2 = () => {
  try {
    const { grades } = gradesV2;
    return grades;
  } catch (err) {
    return err;
  }
};

const getGradesByIdV2 = (id) => {
  const { grades } = gradesV2;

  for (const grade of grades) {
    if (grade.id === id) {
      return grade;
    }
  }

  return null;
};

const getGradesByStudentIdV2 = (id) => {
  const results = [];
  const { grades } = gradesV2;

  for (const grade of grades) {
    const { studentId } = grade;

    if (studentId === id) {
      results.push(grade);
    }
  }

  return results;
};

module.exports = {
  getAllGradesV2,
  getGradesByIdV2,
  getGradesByStudentIdV2,
};
