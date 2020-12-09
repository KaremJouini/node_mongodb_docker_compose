const express = require("express");
const router= express.Router();
const courseController = require("../controllers/courseController");

router.get('/',courseController.getAllCourses);
router.post('/',courseController.addCourse);
router.delete('/:id',courseController.deleteCourse);


module.exports =router;