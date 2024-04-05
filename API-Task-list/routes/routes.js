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

router.delete('/deleteTask/:id', async (req, res) => {
    const id = req.params.id
    

    try {
        const taskDelete = await Task.findByIdAndDelete(id)
        if(!taskDelete){
            return res.status(404).send('ID task not found.')
        } else {
            console.log("Tasks Eliminated Successfull".yellow)
            res.send('Task Eliminated successfull ...')
        }
    } catch (error) {
        console.log('Error : '.red , error)
    }
    
}) 





router.put('/tasks:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params)
})


module.exports = router