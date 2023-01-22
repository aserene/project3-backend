// Import dependencies 
require("dotenv").config()
const {PORT = 3000} = process.env
const express = require("express")
const cors = require("cors")
const morgan =require("morgan")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const jobsRouter = require("./controllers/router")
const userRouter = require("./controllers/user")
//application object
const app=express()
//middleware
app.use(cors()) 
app.use(morgan("dev")) 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//this middleware is what enables us to create user sessions and store user info in mongodb

// app.use(
//     session({
//         secret: process.env.SECRET,
//         store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
//         saveUninitialized: true,
//         resave: false,
//     })
// )

//routers
app.use("/jobs", jobsRouter)
app.use("/user", userRouter)
//routes
app.get("/", (req, res) => {
    res.send("Its about the journey, not the destination...UwU")
})
//app listener
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))