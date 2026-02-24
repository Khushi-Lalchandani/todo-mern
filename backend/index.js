const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
const todoRoutes = require('./routes/TodoRoutes')

app.use(express.json())
app.use(cors())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.use('/api/todos', todoRoutes)

app.listen(process.env.PORT, () => console.log("Server running on port ", process.env.PORT))