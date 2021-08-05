const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String},
    courses : [{ type: mongoose.Types.ObjectId, ref: 'course'}]
})


module.exports = mongoose.model('teacher', teacherSchema );