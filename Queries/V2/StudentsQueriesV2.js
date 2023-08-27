const studentDataV2 = require("../../data/V2/StudentsDataV2.json");

const getAllStudentsV2 = () => {
  const { students } = studentDataV2;
  return students;
};

const getStudentByIdV2 = (id) => {
  const { students } = studentDataV2;
  const student = students.find((student) => student.id === id);
  return student;
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
};
