const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you load environment variables

async function connectDB() {
    console.log("MONGODB_URL:", process.env.MONGODB_URL); // Log the MongoDB URL for debugging

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Failed to connect to DB", err);
    }
}

module.exports = connectDB;
