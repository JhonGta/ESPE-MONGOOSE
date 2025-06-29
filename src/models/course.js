const mongoose = require("mongoose");
const { Schema } = mongoose;
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [10, "No se cumple con la longitud mínima de 10 caracteres"],
    maxlength: 300,
  },
  numberOfTopics: {
    type: Number,
    default: 0,
    min: 0,
    max: 40,
  },
  publishedAt: Date,
});
courseSchema.virtual("info");
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
