let students = [
  { id: 1, name: "Rahul", department: "CSE" },
  { id: 2, name: "Ananya", department: "ISE" }
];

exports.getStudents = (req, res) => res.json(students);

exports.addStudent = (req, res) => {
  const student = { id: Date.now(), ...req.body };
  students.push(student);
  res.status(201).json(student);
};

exports.deleteStudent = (req, res) => {
  const id = Number(req.params.id);
  const previousLength = students.length;
  students = students.filter(student => student.id !== id);

  if (students.length === previousLength) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json({ message: "Student deleted successfully" });
};