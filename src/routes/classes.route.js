const router = require('express').Router();
const {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
} = require('../controllers/classes.controller.js');

// Get all classes
router.get('/', getAllClasses);

// Get class by ID
router.get('/:id', getClassById);

// Create a new class (admin only - you can add auth middleware later)
router.post('/', createClass);

// Update class (admin only - you can add auth middleware later)
router.put('/:id', updateClass);

// Delete class (admin only - you can add auth middleware later)
router.delete('/:id', deleteClass);

module.exports = router;