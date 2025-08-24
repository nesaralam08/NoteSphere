const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "custom", "not-select"],
        default: "not-select"
    },
    mobile_no: {
        type: Number,
        required: false,
        unique: true,
        default: null
    },
    course: {
        type: String,
        required: false,
        default: "not-select"
    },
    year: {
        type: Number,
        required: false,
        default: 1
    },
    profile_url: {
        type: String,
        required: false,
        default: ""
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "deactive", "suspend"],
        default: 'active'
    }

}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
