const express = require('express')
const { connectPSQL } = require('./database/db-conecction')
const app = express()
const colors = require('colors')

connectPSQL()


app.get('/', (req, res) => {
    res.send("HELLO")
})

const PORT = 3456
app.listen(PORT, () => {
    console.log(`Listen on PORT:${PORT}`.blue)
})