const express = require("express");
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConfig'); // Import database config

// Import the route files
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');

// Initialize the app
const app = express();

// Connect to the database
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Use the route files
app.use('/login', loginRoute);
app.use('/signup', signupRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
