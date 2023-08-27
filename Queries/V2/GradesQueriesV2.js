const gradesV2 = require("../../data/V2/GradesDataV2.json");

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
  getGradesByStudentIdV2,
};
