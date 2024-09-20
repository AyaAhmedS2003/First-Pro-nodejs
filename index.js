const express = require('express');
const mongoose = require('mongoose');
const url ="mongodb+srv://ayashalabii30:12345@learn-mongodb.zm56u.mongodb.net/CreateNewDatabase?retryWrites=true&w=majority&appName=learn-mongodb"
mongoose.connect(url).then(()=>{
console.log("mongodb server statrted");
})
const { body, validationResult } = require('express-validator');
const app = express();
app.use(express.json());
const {courses} = require('./data/courses');
const courseController = require('./controller/courseController');
const coursesRouter = require('./routes/courses.route');
    app.use('/api/courses',coursesRouter);

app.listen(4000, () => {
    console.log("I'm listening port : 4000");
})
