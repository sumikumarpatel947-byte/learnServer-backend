const express = require('express')

const router = express()
const authRoutes = require('./auth.route.js')
const classesRoutes = require('./classes.route.js')

router.use('/auth', authRoutes)
router.use('/classes', classesRoutes)



module.exports = router

