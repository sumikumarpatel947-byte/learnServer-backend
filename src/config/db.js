const mongoose = require('mongoose')


const connectDB = async ()=> {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected");
      console.log("Connected DB:", mongoose.connection.name);
      } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        console.warn("⚠️  Server will continue running without database connection");
        // Don't exit process - payment routes don't need DB
      }
};
module.exports = connectDB
