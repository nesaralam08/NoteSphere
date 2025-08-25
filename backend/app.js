require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./database/connectDB')
const PORT = process.env.PORT || 4000
const studentRouter = require('./router/studentRouter')
const notesRouter = require('./router/notesRouter')
const quesRouter = require('./router/quesRouter')

app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use(express.json({ limit: "50mb" }))
app.use(cors())
app.use(bodyparser.json())
connectDB(process.env.MONGO_URL)

app.use('/api',studentRouter)
app.use('/api',notesRouter)
app.use('/api',quesRouter)

app.get('/alam',(req,res)=>{
    res.send("Nesar Alam")
})

app.listen(PORT,()=>{
    console.log(`Server is running AT: http://localhost:${PORT}`)
})