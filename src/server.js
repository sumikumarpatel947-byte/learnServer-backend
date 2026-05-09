const app = require('./app.js')
const connectDB = require('./config/db.js')

console.log('Starting server...')
console.log('Connecting to database...')

connectDB().then(() => {
  console.log('Database connection attempt completed');
}).catch((error) => {
  console.error('Database connection error:', error.message);
});

const PORT = process.env.PORT || 5001

console.log(`Attempting to start server on port ${PORT}...`)

app.listen(PORT, (error) => {
  if (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
  console.log(`✅ Server is running on port ${PORT}`)
  console.log(`✅ API available at http://localhost:${PORT}/api`)
})