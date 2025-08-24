const mongoose = require('mongoose')

const connectDB = (url)=>{
    mongoose.connect(url)
    .then(()=>console.log("Database Connected"))
    .catch((e)=>console.log(e))
}

module.exports = connectDB