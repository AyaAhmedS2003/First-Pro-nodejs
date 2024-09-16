const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const courseController = require('../controller/courseController');
// get all courses
router.route('/').get(courseController.getAllCourses)
    .post([
        body('name').notEmpty().withMessage("not allowed the name of course empty"),
        body('price').notEmpty().withMessage("price is required!!")
    ], courseController.addCourse);
// get single course bi id
router.route('/:courseId').get(courseController.getCourse)
    .patch(courseController.updataCourse)
    .delete(courseController.deleteCourse);

module.exports = router;