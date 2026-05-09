const express = require('express')

const router = express()
const authRoutes = require('./auth.route.js')
const classesRoutes = require('./classes.route.js')
const reviewsRoutes = require('./reviews.route.js')
const paymentRoutes = require('./payment.route.js')
const enrollmentRoutes = require('./enrollments.route.js')

router.use('/auth', authRoutes)
router.use('/classes', classesRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/payment', paymentRoutes)
router.use('/enrollments', enrollmentRoutes)



module.exports = router

