// bring in express 
const express = require("express")

// bring in jobs
const job = require("../models/jobs")

//enable router
const router = express.Router()

// index route 
router.get('/', (req, res) => {
    job.find({})
    .then((jobs) => {
        res.json(jobs)
    })
})

//destroy route 
router.delete('/:id', async (req, res) => {
    // get the id from params 
    const id = req.params.id
    try {
        res.json(await job.findByIdAndDelete(id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//update route 
router.put('/:id', async (req, res) => {
    // get the id from params 
    const id = req.params.id
    try {
        res.json(await job.findByIdAndUpdate(id, req.body, {new: true}) )
    } catch(error) {
        res.status(400).json(error)
    }
})

// create route 
router.post("/", async (req, res) => {
    try {
        res.json(await job.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

//show route 
router.get("/job/:id", async (req, res) => {
    try{
        res.json(await job.findById(req.params))
    }catch (error){
        res.status(400).json(error)
    }
})

module.exports = router