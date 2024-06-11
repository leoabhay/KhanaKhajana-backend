const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/khanakhajana");
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
