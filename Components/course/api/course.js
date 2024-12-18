const express = require("express");
const router = express.Router();
const CourseController = require("./coursesController"); // Import controller

router
    .get("/", CourseController.getCoursesList) 
    .get("/:id", CourseController.GetCourseDetail)

module.exports = router;
