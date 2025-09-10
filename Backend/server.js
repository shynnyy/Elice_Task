const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db') // nanti bikin file db.js

dotenv.config()
connectDB() // connect ke MongoDB

const app = express()

app.use(express.json()) // parsing JSON body

// route dasar
app.get('/', (req, res) => {
  res.send('Backend server is running')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
