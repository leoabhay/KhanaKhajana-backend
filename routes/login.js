const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path to your User model
const { loginValidationRules, validate } = require('../middleware/validation');

const router = express.Router();

router.post("/", loginValidationRules(), validate, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).send("Wrong password");
        }

        res.status(200).render("home");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
