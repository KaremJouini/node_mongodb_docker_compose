const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: String,
    faculty: String,
    level: Number,
    teacherName: String
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;