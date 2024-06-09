const express = require('express')
const cors = require('cors')
const connectDB = require('./Config/db')
const errorHandler = require('./Middlewares/errorHandler')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(errorHandler)

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next()
})

// student API
app.use('/api/students', require('./Routes/studentRouter'))

app.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`)
    connectDB()
})