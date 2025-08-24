const express = require('express')
const Router = express.Router()
const {uploadNotes,updateNotes,getAllNotes,getNotesById,deleteNotes} = require('../controller/notesController')
const upload = require("../utils/multer");

Router.post('/notes/upload',upload.single("file"),uploadNotes)
Router.put('/notes/update/:id',upload.single("file"),updateNotes)
Router.get('/notes/get',getAllNotes)
Router.get('/notes/getbyid/:id',getNotesById)
Router.delete('/notes/delete/:id',deleteNotes)

module.exports = Router