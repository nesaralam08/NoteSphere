const notesModel = require('../model/notesModel')
const cloudinary = require('../utils/cloudinary')

const uploadNotes = async (req, res) => {
  try {
    const { subject_name, title, description, course, year, semester, unit, student_id } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const newNote = new notesModel({
      subject_name,
      title,
      description,
      course,
      year: Number(year),
      semester: Number(semester),
      unit: Number(unit),
      student_id,
      file_url: req.file.path,
      file_id: req.file.filename,
    });

    const result = await newNote.save();
    res.status(201).json({ success: true, message: "Note uploaded", note: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred",
      error
    });
  }
};

const updateNotes = async (req, res) => {
  try {
    const updateData = {};

    if (req.file) {
      updateData.file_url = req.file.path;
      updateData.file_id = req.file.filename;
    }
    const updatableFields = ["subject_name", "title", "description", "course", "year", "semester", "unit"];
    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = ["year", "semester", "unit"].includes(field)
          ? Number(req.body[field])
          : req.body[field];
      }
    });

    const updatedNote = await notesModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true } 
    );

    if (!updatedNote) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    res.json({ success: true, message: "Note updated successfully", result: updatedNote });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};



const getAllNotes = async (req, res) => {
  try {
    const notes = await notesModel.find()
    res.json({ success: true, message: "Notes fetch successfully", notes: notes });
  } catch (error) {
    console.error("Get Notes Error:", error);
    res.status(500).send({ success: false, message: 'An error occurred', result: error });
  }
}

const getNotesById = async (req, res) => {
  try {
    const note = await notesModel.findById(req.params.id)
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });
    res.json({ success: true, message: "Note fetch successfully", notes: note });
  } catch (error) {
    console.error("Get Note By ID Error:", error);
    res.status(500).send({ success: false, message: 'An error occurred', result: error });
  }
}

const deleteNotes = async (req, res) => {
  try {
    const note = await notesModel.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });

    await cloudinary.uploader.destroy(note.file_id);
    await note.deleteOne();
    res.json({ success: true, message: "Note deleted successfully" });

  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).send({ success: false, message: 'An error occurred', result: error });
  }
}

module.exports = { updateNotes, uploadNotes, getAllNotes, getNotesById, deleteNotes }