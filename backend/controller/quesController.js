const quesModel = require('../model/quesPaperModel')
const cloudinary = require('../utils/cloudinary')

const uploadQues = async (req, res) => {
    try {
        const { subject_name, course, year, semester, university, student_id } = req.body;
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const ques = new quesModel({
            subject_name,
            course,
            year: Number(year),
            semester: Number(semester),
            university,
            file_url: req.file.path,
            file_id: req.file.filename,
            student_id,
        });

        const result = await ques.save();
        res.status(201).json({ success: true, message: "QuesPaper Uploaded", result: result });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error occurred",
            error
        });
    }
}

const updateQues = async (req, res) => {
    try {
        const updateData = {};

        if (req.file) {
            updateData.file_url = req.file.path;
            updateData.file_id = req.file.filename;
        }
        const updatableFields = ["subject_name", "course", "year", "semester", "university", "mid" ];
        updatableFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updateData[field] = ["year", "semester", "mid"].includes(field)
                    ? Number(req.body[field])
                    : req.body[field];
            }
        });

        const updatedQues = await quesModel.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true }
        );

        if (!updatedQues) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }

        res.json({ success: true, message: "QuesPaper updated successfully",result:updatedQues });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllQues = async (req, res) => {
    try {
        const quespapers = await quesModel.find();
        if (!quespapers) return res.status(404).json({ success: false, message: "QuesPapers not found" })
        res.json({ success: true, message: "QuesPapers fetch successfully", result: quespapers })
    } catch (error) {
        console.error("Get Ques Error:", error);
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

const getQuesById = async (req, res) => {
    try {
        const ques = await quesModel.findById(req.params.id)
        if (!ques) return res.status(404).json({ success: false, message: "QuesPaper not found" })
        res.json({ success: true, message: "QuesPaper fetch successfully", result: ques });
    } catch (error) {
        console.error("Get QuesPaper by Id Error:", error);
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

const deleteQues = async (req, res) => {
    try {
        const ques = await quesModel.findById(req.params.id)
        if (!ques) return res.status(404).json({ success: false, message: "QuesPaper not found" });
        await cloudinary.uploader.destroy(ques.file_id)
        await ques.deleteOne();
        res.json({ success: true, message: "QuesPaper deleted successfully" });

    } catch (error) {
        console.error("QuesPaper Delete Error:", error);
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

module.exports = { updateQues, uploadQues, getAllQues, getQuesById, deleteQues }