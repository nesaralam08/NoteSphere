const express = require('express')
const Router = express.Router()
const upload = require('../utils/multer')
const {updateQues,uploadQues,getAllQues,getQuesById,deleteQues} = require('../controller/quesController')

Router.post('/ques/upload',upload.single("file"),uploadQues)
Router.put('/ques/update/:id',upload.single("file"),updateQues)
Router.get('/ques/getallques',getAllQues)
Router.get('/ques/getbyid/:id',getQuesById)
Router.delete('/ques/delete/:id',deleteQues)

module.exports = Router