const mongoose = require('mongoose');
const Class = require('./src/models/classes.js');
require('dotenv').config();

const classesData = [
  {
    title: "21 Days Dincharya Program",
    level: "Beginner",
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

console.log('Starting seed script...');

const seedClasses = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sercureDB');

    console.log('Connected to MongoDB successfully');

    // Clear existing classes
    console.log('Clearing existing classes...');
    await Class.deleteMany({});
    console.log('Cleared existing classes');

    // Insert new classes
    console.log('Inserting new classes...');
    const classes = await Class.insertMany(classesData);
    console.log(`Seeded ${classes.length} classes successfully`);

    console.log('Seeding completed!');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
};

// Run the seed function
seedClasses().then(() => {
  console.log('Seed script completed successfully');
  process.exit(0);
}).catch((error) => {
  console.error('Seed script failed:', error);
  process.exit(1);
});