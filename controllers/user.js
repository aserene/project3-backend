const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

const router = express.Router()

router.get("/", (req, res) => {
    res.redirect("/user/login")
})

router.get("/signup", (req, res) => {
    res.send("this will be the signup page")
})
// the below post route grabs what will be in the password field, encrypts it, and then creates the user.

// router.post("/signup", async (req, res) => {
//     req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
//     User.create(req.body, (err, user) => {
//         res.redirect("/user/login")
//     })
// })

router.get("/login", (req, res) => {
    res.send("this will be the default landing page where the user will be prompted to login. there will be a link to go to a sign up page for new users")
})

//the below post route will let the user login

// router.post("/login", (req, res) => {
//     // res.send("login")
//     // get the data from the request body
//     const { username, password } = req.body;
//     User.findOne({ username }, (err, user) => {
//       // checking if userexists
//       if (!user) {
//         res.send("user doesn't exist");
//       } else {
//         //check if password matches
//         const result = bcrypt.compareSync(password, user.password);
//         if (result) {
//             req.session.username = username;
//             req.session.loggedIn = true ;
//           res.redirect("/wish");
//         } else {
//           res.send("wrong password");
//         }
//       }
//     })
// })

//the route below will let the user sign out

// router.get("/logout", (req, res) => {
//     // destroy session and redirect to main page
//     req.session.destroy((err) => {
//         res.redirect("/")
//     })
// })
module.exports = router