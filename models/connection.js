require("dotenv").config()
const mongoose = require("mongoose")
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {DATABASE_URL} = process.env

mongoose.set('strictQuery', false) // Allows Mongo to accept information outside of the parameters 
mongoose.connect(DATABASE_URL, config)

mongoose.connection
.on("open", () => console.log("Mongoose connected"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

module.exports = mongoose