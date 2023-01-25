// Import dependencies 
require("dotenv").config()
const {PORT = 3000} = process.env
const express = require("express")
const cors = require("cors")
const morgan =require("morgan")
const jobsRouter = require("./controllers/router")
const userRouter = require("./controllers/user")
const auth = require("./auth")
//application object
const app=express()
//middleware
app.use(cors()) 
app.use(morgan("dev")) 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//routers
app.use("/jobs", jobsRouter)
app.use("/user", userRouter)
//routes
app.get("/", auth, (req, res) => {
    res.json(req.payload)
})
//app listener
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))