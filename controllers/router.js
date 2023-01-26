// bring in express 
const express = require("express")

// bring in jobs
const job = require("../models/jobs")
//bring in auth function
const auth = require("../auth")

//enable router
const router = express.Router()

// index route 
router.get('/', auth, (req, res) => {
    job.find({})
    .then((jobs) => {
        res.json(jobs)
    })
})

//destroy route 
router.delete('/:id', auth, async (req, res) => {
    // get the id from params 
    const id = req.params.id
    try {
        res.json(await job.findByIdAndDelete(id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//update route 
router.put('/:id', auth, async (req, res) => {
    // get the id from params 
    const id = req.params.id
    try {
        res.json(await job.findByIdAndUpdate(id, req.body, {new: true}) )
    } catch(error) {
        res.status(400).json(error)
    }
})

// create route 
router.post("/", auth, async (req, res) => {
    try {
        res.json(await job.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

//show route 
router.get("/:id", auth, async (req, res) => {
    try{
        res.json(await job.findById(req.params.id))
    }catch (error){
        res.status(400).json(error)
    }
})

module.exports = router
