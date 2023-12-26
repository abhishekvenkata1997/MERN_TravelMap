const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
const app  = express()
app.use(express.json())

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected")
}).catch((error) => {
    console.log(error)
})

app.use("/api/pins/",pinRoute)
app.use("/api/users/",userRoute)
app.listen(8000, () => {
    console.log("Backend server is running on port 8000")
})
