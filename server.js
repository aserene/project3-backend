// Import dependencies 
require("dotenv").config()
const {PORT = 3000} = process.env
const express = require("express")
const cors = require("cors")
const morgan =require("morgan")
const jobsRouter = require("./controllers/router")
const userRouter = require("./controllers/user")
const auth = require("./auth")
const mongoose = require("./models/connection")
//application object
const app=express()
//middleware
app.use(cors()) 
app.use(morgan("tiny")) 
app.use(express.json())

//routes
app.get("/", auth, (req, res) => {
    res.json(req.payload)
})
//routers
app.use("/jobs", jobsRouter)
app.use("/user", userRouter)
//app listener
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))