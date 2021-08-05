const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    duration: { type: Number },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'teacher', default: null } 
})

module.exports = mongoose.model('course', courseSchema);
