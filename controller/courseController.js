const { validationResult } = require('express-validator');
const course = require('../models/course.model');
const getAllCourses = async (req, res) => {
    const courses = await course.find();
    res.json(courses);
};
const getCourse = async (req, res) => {
    try {
        const myCourse = await course.findById(req.params.courseId);
        if (!myCourse) {
            return res.status(404).json({ msg: " Sorry,the course not fond " });
        }
        res.json(myCourse);
    }
    catch (err) {
        return res.status(404).json({ msg: "invalid id" });
    }




}
const addCourse = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    console.log(validationResult(req));
    const newCourse = new course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
}
const updataCourse = async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const courseUpdated = await course.findByIdAndUpdate(courseId, { $set: { ...req.body } })
        return res.status(200).json(courseUpdated);
    }
    catch (e) {
        return res.status(400).json({ error: e });
    }
}
const deleteCourse = async(req, res) => {
    const result = await course.deleteOne({_id:req.params.courseId})
    res.status(200).json({ succes: true,msg:result});
}
module.exports = {
    getAllCourses,
    getCourse,
    addCourse,
    updataCourse,
    deleteCourse
}