const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path to your User model
const { signupValidationRules, validate } = require('../middleware/validation');

const router = express.Router();

router.post("/", signupValidationRules(), validate, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).render("home");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
