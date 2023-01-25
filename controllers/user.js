require("dotenv").config()
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {SECRET} = process.env

const router = express.Router()

router.get("/", (req, res) => {
    res.redirect("/user/login")
})

router.get("/signup", (req, res) => {
    res.send("this will be the signup page")
})

router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error})
    }
})

router.get("/login", (req, res) => {
    res.send("this will be the default landing page where the user will be prompted to login. there will be a link to go to a sign up page for new users")
})

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if (user){
            const match = await bcrypt.compare(password, user.password)
            if(match){
                const token = await jwt.sign({username}, SECRET)
                res.status(200).json({token})
            } else {
                res.status(400).json({error: "PASSWORD IS INCORRECT OR DOES NOT EXIST"})
            }
        }else {
            res.status(400).json({error: "USER DOES NOT EXIST"})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})
// the logout function would usually be here but will instead go on the frontend
module.exports = router