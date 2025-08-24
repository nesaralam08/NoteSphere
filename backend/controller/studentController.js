const studentModel = require('../model/studentModel')

const addStudent = async(req,res)=>{
    try {
        const {name,email,profile_url} = req.body;
        const check = await studentModel.findOne({email:email})
        if(check){
            return res.status(200).send({sucess:true,message:"student already exists",result:check})
        }
        const studentData = {
            name:name,
            email:email,
            profile_url:profile_url
        }
        const student = new studentModel(studentData);
        const result = await student.save();
        res.status(201).send({success:true,message:"student added successfully",result:result});
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

const updateStudent = async(req,res)=>{
    try {
        const {_id,...fieldsToUpdate} = req.body
        const updateData = {}
        for(let key in fieldsToUpdate){
            if(fieldsToUpdate[key]!=undefined && fieldsToUpdate[key]!=null){
                updateData[key] = fieldsToUpdate[key];
            }
        }
        const result = await studentModel.findByIdAndUpdate(_id,{$set:updateData},{new:true})
        if (!result) {
            return res.status(404).send({ success: false, message: "User not found" });
        }
        res.send({success:true,message:"student updated successfully",result:result});
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

const getStudent = async(req,res)=>{
    try {
        const allstudents = await studentModel.find()
        res.send({success:true,message:"students fetch successfully",result:allstudents});
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

const getById = async(req,res)=>{
    try {
        const {uid} = req.query
        const result = await studentModel.findOne({_id:uid})
        res.send({success:true,message:"student fetch successfully",result:result});
    } catch (error) {
        res.status(500).send({ success: false, message: 'An error occurred', result: error });
    }
}

module.exports = {addStudent,updateStudent,getById,getStudent}