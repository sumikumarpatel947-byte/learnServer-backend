const router = require('express').Router();
const { login, signup, getAllUsers } = require('../controllers/auth.controller.js');
const { authenticate, authorizeAdmin } = require('../middleware/middleware.js');

// Login route
router.post('/login', login);

// Signup route
router.post('/signup', signup);

// Get all users (admin only) - Protected route
router.get('/users', authenticate, authorizeAdmin, getAllUsers);

module.exports = router;