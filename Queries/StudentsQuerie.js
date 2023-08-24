const studentData = require("../data/StudentData.json");

const getAllStudents = () => {
  const { students } = studentData;
  return students;
};

const getStudentById = (id) => {
  const { students } = studentData;
  const student = students.find((student) => student.id === id);
  return student;
};

module.exports = {
  getAllStudents,
  getStudentById,
};
