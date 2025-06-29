const Course = require('../models/course');

exports.getCourses = (req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((error) => {
      console.log("Error al obtener los cursos:", error);
      res.json(error);
    });
};

exports.getCourseById = (req, res) => {
  const id = req.params.id;
  Course.findById(id)
    .then((course) => res.json(course))
    .catch((error) => {
      console.log("Error al obtener el curso:", error);
      res.json(error);
    });
};

exports.createCourse = (req, res) => {
  Course.create({
    title: "Curso de Express",
    description: "Curso de Express para aprender a manejar Backend con Node",
    numberOfTopics: 5,
  })
    .then((doc) => res.json(doc))
    .catch((error) => {
      console.log("Error al crear el curso:", error);
      res.json(error);
    });
};

exports.updateCourse = (req, res) => {
  const id = req.params.id;
  Course.findByIdAndUpdate(
    { _id: id },
    { numberOfTopics: 20 },
    { publishedAt: new Date() },
    { new: true }
  )
    .then((course) => res.json(course))
    .catch((error) => {
      console.log("Error al actualizar el curso:", error);
      res.json(error);
    });
};

exports.deleteCourse = (req, res) => {
  const id = req.params.id;
  Course.findByIdAndDelete({ _id: id })
    .then(() => res.json("Curso eliminado"))
    .catch((error) => {
      console.log("Error al eliminar el curso:", error);
      res.json(error);
    });
};
