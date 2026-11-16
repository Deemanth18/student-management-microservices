let courses = [
  { id: 1, name: "Computer Science", duration: "4 Years" },
  { id: 2, name: "Information Science", duration: "4 Years" }
];

exports.getCourses = (req, res) => res.json(courses);

exports.addCourse = (req, res) => {
  const course = { id: Date.now(), ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

exports.deleteCourse = (req, res) => {
  const id = Number(req.params.id);
  const previousLength = courses.length;
  courses = courses.filter(course => course.id !== id);

  if (courses.length === previousLength) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json({ message: "Course deleted successfully" });
};