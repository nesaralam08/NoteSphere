const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:false,
        default: ""
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
    unit: {
        type: Number,
        required: true
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

module.exports = mongoose.model('Note', NotesSchema);
