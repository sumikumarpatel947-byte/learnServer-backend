const mongoose = require('mongoose')


const connectDB = async ()=> {
    try {
        console.log(process.env.PORT)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB
