const express = require('express')
const app = express()
const Task = require('../models/models')
const router = express.Router()
const mongoose = require("mongoose")

//app.use(express.json())
app.use(express.urlencoded({ extended : true}))

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/createTask',  (req, res) => {
    //const taskName = req.body.task_name
    console.log(req.body.description)
    /* const task = new Task(req.body)
    await task.save()
    res.json(task) */
})


module.exports = router