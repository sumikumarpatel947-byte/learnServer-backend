const express = require('express');
const router = express.Router();
const Enrollment = require('../models/enrollments');

// Save enrollment after payment
router.post('/save-enrollment', async (req, res) => {
  try {
    const { userId, classId, paymentId, orderId, amount } = req.body;

    const enrollment = new Enrollment({
      userId,
      classId,
      paymentId,
      orderId,
      amount
    });

    await enrollment.save();

    res.json({ success: true, enrollment });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    if (error.code === 11000) {
      // Duplicate key error - user already enrolled
      res.json({ success: false, error: 'Already enrolled in this class' });
    } else {
      res.status(500).json({ success: false, error: 'Failed to save enrollment' });
    }
  }
});

// Get user's enrolled classes
router.get('/user-enrollments/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const enrollments = await Enrollment.find({ userId, status: 'active' })
      .populate('classId')
      .sort({ enrolledAt: -1 });

    res.json({ success: true, enrollments });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch enrollments' });
  }
});

// Check if user is enrolled in a specific class
router.get('/check-enrollment/:userId/:classId', async (req, res) => {
  try {
    const { userId, classId } = req.params;

    const enrollment = await Enrollment.findOne({ 
      userId, 
      classId, 
      status: 'active' 
    });

    res.json({ success: true, isEnrolled: !!enrollment });
  } catch (error) {
    console.error('Error checking enrollment:', error);
    res.status(500).json({ success: false, error: 'Failed to check enrollment' });
  }
});

module.exports = router;
