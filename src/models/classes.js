const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    level: {
      type: String,
      required: [true, 'Level is required'],
      
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    price: {
      type: String,
      required: [true, 'Price is required'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
    },
    rating: {
      type: String,
      required: [true, 'Rating is required'],
    },
    students: {
      type: String,
      required: [true, 'Students count is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    instructor: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    schedule: {
      type: String,
      required: [true, 'Schedule is required'],
    },
    features: [{
      type: String,
      required: true,
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model('Class', classSchema);

module.exports = Class;