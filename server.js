// Import dependencies 
require("dotenv").config()
const {PORT = 3000} = process.env
const express = require("express")
const cors = require("cors")
const morgan =require("morgan")
const jobsRouter = require("./controllers/router")
//application object
const app=express()
//middleware
app.use(cors()) 
app.use(morgan("dev")) 
app.use(express.json())
app.use("/jobs", jobsRouter)
//routes
app.get("/", (req, res) => {
    res.send("Its about the journey, not the destination...UwU")
})
//app listener
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))