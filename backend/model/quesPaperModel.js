const mongoose = require('mongoose');

const QuesPaperSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 1
    },
    semester: {
        type: Number,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    mid: {
        type: Number,
        enum: [1, 2],
    },
    file_url: {
        type: String,
        required: true
    },
    file_id:{
        type:String,
        required:true
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('QuesPaper', QuesPaperSchema);
