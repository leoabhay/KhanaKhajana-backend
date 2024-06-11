const express = require('express');
const connectDB = require('./config/dbConfig.js');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
