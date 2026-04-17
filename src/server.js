const app = require('./app.js')
const connectDB = require('./config/db.js')

console.log('Starting server...')
console.log('Connecting to database...')

connectDB();

const PORT = process.env.PORT || 5001

console.log(`Attempting to start server on port ${PORT}...`)

app.listen(PORT, ()=>{
    console.log(`✅ Server is running on port ${PORT}`)
    console.log(`✅ API available at http://localhost:${PORT}/api`)
})