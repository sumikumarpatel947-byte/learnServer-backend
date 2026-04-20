const express = require('express')

const router = express()
const authRoutes = require('./auth.route.js')
const classesRoutes = require('./classes.route.js')
const reviewsRoutes = require('./reviews.route.js')

router.use('/auth', authRoutes)
router.use('/classes', classesRoutes)
router.use('/reviews', reviewsRoutes)



module.exports = router

