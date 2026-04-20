const Review = require('../models/reviews.js');

// Create a new review
const createReview = async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (!name || !rating || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, rating, and message are required',
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5',
      });
    }

    const newReview = await Review.create({
      name,
      rating,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      data: newReview,
    });
  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit review',
      error: error.message,
    });
  }
};

// Get all approved reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Reviews retrieved successfully',
      data: reviews,
    });
  } catch (error) {
    console.error('Get reviews error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve reviews',
      error: error.message,
    });
  }
};

// Get all reviews (for admin - includes unapproved)
const getAllReviewsAdmin = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'All reviews retrieved successfully',
      data: reviews,
    });
  } catch (error) {
    console.error('Get all reviews error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve reviews',
      error: error.message,
    });
  }
};

// Approve review (admin only)
const approveReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Review approved successfully',
      data: review,
    });
  } catch (error) {
    console.error('Approve review error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to approve review',
      error: error.message,
    });
  }
};

// Delete review (admin only)
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    console.error('Delete review error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete review',
      error: error.message,
    });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getAllReviewsAdmin,
  approveReview,
  deleteReview,
};
