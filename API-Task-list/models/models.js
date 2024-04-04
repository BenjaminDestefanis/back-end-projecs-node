const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName: String,
    Description: String,
    Complete: Boolean,
    Date: String,
    Time: String
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task