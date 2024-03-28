const express = require('express')
const app = express()
const Task = require('../models/models')
const router = express.Router()
const mongoose = require("mongoose")

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/createTask', async (req, res) => {
    res.send("POST")
    /* const task = new Task(req.body)
    await task.save()
    res.json(task) */
})


module.exports = router