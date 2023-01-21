const mongoose = require("./connection")

const JobSchema = new mongoose.Schema({
    companyName: String,
    jobTitle: String,
    location: String,
    salary: Number,
    link: String,
    comments: String
})
const Jobs = mongoose.model("Jobs", JobSchema)

module.exports = Jobs