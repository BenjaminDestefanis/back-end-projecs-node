const express = require('express')
const app = express()
const Task = require('../models/models')
const router = express.Router()
const mongoose = require("mongoose")
 





router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks) 

})

router.post('/createtask', async  (req, res) => {
    const {task_name, description, complete, date } = req.body
    console.log(task_name, description, complete, date) 
    
   //res.send("HELLO POST")
    /* const task = new Task(req.body)
    await task.save()
    res.json(task) */
})


module.exports = router