require('dotenv').config()
const express = require('express')
const db = require('./db-connect')
const colors = require('colors')
const app = express()
const tasksRoutes = require('./routes/routes')
const TaskModel = require("./models/models")


app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// routes
app.use(tasksRoutes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


const PORT = 3000

app.listen(PORT, (error) => {
    if(error){
        console.log("Error in server setup".red)
    } else {
        console.log('Server listening on PORT:'.green, PORT.toString().blue)
    }
})


