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

    

    
    /* console.log(task_name, description, complete, date) 
    res.json(task) */

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
    
    await newTask.save()
    res.json(newTask) 
})





router.put('/tasks:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params)
})


module.exports = router