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
    
    console.log(req.body.task_name) 
   //res.send("HELLO POST")
    /* const task = new Task(req.body)
    await task.save()
    res.json(task) */
})

router.delete('/del', (req, res) => {
    res.send("Hello DELETE")
})



module.exports = router