const mongoose = require('mongoose');

// Define the schema
const courseSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    }
});


const Course = mongoose.model('Course',courseSchema);

module.exports = Course;