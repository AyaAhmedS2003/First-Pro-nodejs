let {courses} = require('../data/courses');
const {validationResult} = require('express-validator');
const getAllCourses=(req, res) => {
    res.json(courses);
};
const getCourse = (req, res) => {
    const courseId = +req.params.courseId;
    const course = courses.find((course) => course.id === courseId);
    if (!course) {
        res.status(404).json({ msg: " Sorry,the course not fond " });
    }
    else {

        res.json(course);
    }
}
const addCourse = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    console.log(validationResult(req));
    const course = { id: courses.length + 1, ...req.body };
    courses.push(course)
    res.status(201).json(course);
}
const updataCourse =  (req, res) => {
    const courseId = +req.params.courseId;
    let course = courses.find((course) => course.id === courseId);
    if (!course) {
        res.status(404).json({ msg: "course not found" })
    }
    course = { ...course, ...req.body }
    res.status(200).json(course);
}
const deleteCourse = (req, res) => {
    const courseId = +req.params.courseId;
    courses = courses.filter((course) => course.id !== courseId)
    res.json({ succes: true });
}
module.exports = {
    getAllCourses,
    getCourse,
    addCourse,
    updataCourse,
    deleteCourse
}