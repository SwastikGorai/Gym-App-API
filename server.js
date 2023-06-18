require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const workoutroutes = require('./Routes/Workout')


// express server
const app = express()

// global middleware
app.use(express.json())

//routes
app.use('/api/workout', workoutroutes) // This Route works when localhost/api/workout/


// connect to database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
