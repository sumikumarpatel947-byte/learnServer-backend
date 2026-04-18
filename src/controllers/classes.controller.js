const Class = require('../models/classes.js');

// Seed data
const seedData = [
  {
    title: "21 Days Dincharya Program",
    level: "Beginner",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1774857491446-dfab0acd73a8?auto=format&fit=crop&w=800&q=80",
    price: "Rs 2,499",
    duration: "21 Days",
    rating: "4.8",
    students: "117 Students",
    description: "Perfect for those new to yoga. Learn fundamental poses, improve sleep cycle, and basic meditation.",
    instructor: "Hina Pamnani",
    time: "21 Days Program",
    schedule: "Mon-Sat, 6th April",
    features: [
      "21 Days Live Sessions",
      "Basic Yoga Poses",
      "Pranayama Practices",
    ],
  },
  {
    title: "Power Yoga",
    level: "Intermediate",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1599901860903-17e6ed7083a0?auto=format&fit=crop&w=800&q=80",
    price: "Rs 1,999",
    duration: "1 Month",
    rating: "4.9",
    students: "250 Students",
    description: "Dynamic and challenging yoga practice for building strength, flexibility, and endurance.",
    instructor: "Rahul Verma",
    time: "90 minutes",
    schedule: "Daily, 7:00 AM",
    features: ["12 Live Sessions", "Advanced Poses", "Strength Building"],
  },
  {
    title: "Meditation & Mindfulness",
    level: "All Levels",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80",
    price: "Rs 1,499",
    duration: "1 Month",
    rating: "4.7",
    students: "180 Students",
    description: "Learn various meditation techniques to reduce stress, improve focus, and find inner peace.",
    instructor: "Meditation Expert",
    time: "60 minutes",
    schedule: "Daily, 6:00 PM",
    features: [
      "Guided Meditation",
      "Breathing Techniques",
      "Stress Management",
    ],
  },
  {
    title: "Yoga for Weight Loss",
    level: "Intermediate",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    price: "Rs 1,799",
    duration: "45 minutes",
    rating: "4.6",
    students: "200 Students",
    description: "Specialized yoga program designed for weight management and body toning.",
    instructor: "Fitness Expert",
    time: "45 minutes",
    schedule: "Mon-Wed-Fri, 5:00 PM",
    features: ["Weight Loss Focus", "Cardio Yoga", "Diet Guidance"],
  },
];

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    let classes = await Class.find({ isActive: true }).sort({ createdAt: -1 });

    // If no classes exist, seed the database
    if (classes.length === 0) {
      console.log('No classes found, seeding database...');
      await Class.insertMany(seedData);
      classes = await Class.find({ isActive: true }).sort({ createdAt: -1 });
      console.log(`Seeded ${classes.length} classes`);
    }

    res.status(200).json({
      success: true,
      message: 'Classes retrieved successfully',
      data: classes,
    });
  } catch (error) {
    console.error('Get classes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve classes',
      error: error.message,
    });
  }
};

// Get class by ID
const getClassById = async (req, res) => {
  try {
    const { id } = req.params;

    const classData = await Class.findById(id);

    if (!classData) {
      return res.status(404).json({
        success: false,
        message: 'Class not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Class retrieved successfully',
      data: classData,
    });
  } catch (error) {
    console.error('Get class by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve class',
      error: error.message,
    });
  }
};

// Create a new class (admin only)
const createClass = async (req, res) => {
  try {
    const classData = req.body;

    const newClass = await Class.create(classData);

    res.status(201).json({
      success: true,
      message: 'Class created successfully',
      data: newClass,
    });
  } catch (error) {
    console.error('Create class error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create class',
      error: error.message,
    });
  }
};

// Update class (admin only)
const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedClass = await Class.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedClass) {
      return res.status(404).json({
        success: false,
        message: 'Class not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Class updated successfully',
      data: updatedClass,
    });
  } catch (error) {
    console.error('Update class error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update class',
      error: error.message,
    });
  }
};

// Delete class (admin only)
const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedClass = await Class.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!deletedClass) {
      return res.status(404).json({
        success: false,
        message: 'Class not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Class deleted successfully',
    });
  } catch (error) {
    console.error('Delete class error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete class',
      error: error.message,
    });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
};