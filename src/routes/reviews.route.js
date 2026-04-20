const express = require('express');
const router = express.Router();
const {
  createReview,
  getAllReviews,
  getAllReviewsAdmin,
  approveReview,
  deleteReview,
} = require('../controllers/reviews.controller.js');

// Public routes
router.post('/', createReview);
router.get('/', getAllReviews);

// Admin routes (add middleware later if needed)
router.get('/admin/all', getAllReviewsAdmin);
router.patch('/admin/approve/:id', approveReview);
router.delete('/admin/:id', deleteReview);

module.exports = router;
