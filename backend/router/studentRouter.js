const express = require('express')
const Router = express.Router()
const {addStudent,updateStudent,getById,getStudent} = require('../controller/studentController')

Router.post('/student/add',addStudent)
Router.post('/student/update',updateStudent)
Router.get('/student/get',getStudent)
Router.get('/student/getbyid',getById)

module.exports = Router