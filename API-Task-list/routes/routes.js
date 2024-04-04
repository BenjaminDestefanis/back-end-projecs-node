const express = require('express')
const app = express()
const Task = require('../models/models')
const router = express.Router()
const mongoose = require("mongoose")
const {actualDate}  = require('../tools/date')
const colors = require('colors')


router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks) 

})

router.get('/getTask')

router.post('/createtask', async  (req, res) => {
    const {task_name, description, complete, date } = req.body

    const newTask = new Task({
        taskName : task_name,
        Description: description,
        Complete: complete,
        Date: !date ? actualDate() : this.toString(date)
    }) 


    try {
        await newTask.save()
        console.log('Task Saved susessfull ...'.yellow)
    } catch (error) {
        console.log('An Error has ocurred :'.red + error)
    }
    res.json(newTask) 
})

router.delete('/deleteTask/:id', (req, res) => {
    const id = req.params
    console.log('DELETE')
    res.send("TASK DELETE")
})





router.put('/tasks:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params)
})


module.exports = router