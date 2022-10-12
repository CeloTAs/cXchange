const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
dotenv.config();

const router = express.Router();

// Load Input validations
const validateRegisterInput = require("../validation/register");
const User = require("../models/User");

// User registration
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(400).json({ email: "Email already exists" });

    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  });
});
