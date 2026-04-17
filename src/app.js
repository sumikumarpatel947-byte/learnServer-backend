const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use('/api', routes)


module.exports = app