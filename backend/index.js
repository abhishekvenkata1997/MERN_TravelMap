const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")

const app  = express()
app.use(express.json())

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected")
}).catch((error) => {
    console.log(error)
})
app.listen(8000, () => {
    console.log("Backend server is running on port 8000")
})
