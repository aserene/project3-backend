require("dotenv").config()
const mongoose = require("mongoose")

mongoose.set('strictQuery', false); // Allows Mongo to accept information outside of the parameters 

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
.on("open", () => console.log("Mongoose connected"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

module.exports = mongoose