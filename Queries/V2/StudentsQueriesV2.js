const studentDataV2 = require("../../data/V2/StudentsDataV2.json");

const { getGradesByStudentIdV2 } = require("./GradesQueriesV2");

const getAllStudentsV2 = () => {
  const { students } = studentDataV2;
  return students;
};

const getAllStudentsWithGradesV2 = () => {
  const results = [];

  const students = getAllStudentsV2();

  for (const student of students) {
    const { id } = student;
    const grades = getGradesByStudentIdV2(id);
    const copy = { ...student };
    copy.grades = grades;

    results.push(copy);
  }

  return results;
};

const getStudentByIdV2 = (id) => {
  const { students } = studentDataV2;
  const student = students.find((student) => student.id === id);
  return student;
};

module.exports = {
  getAllStudentsV2,
  getAllStudentsWithGradesV2,
  getStudentByIdV2,
};
