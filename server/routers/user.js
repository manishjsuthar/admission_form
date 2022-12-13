const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { mobile, name, age, batch, payment_type } = req.body;

  console.log("req body", req.body);
  let user = await User.findOne({ mobile });
  if (user) {
    return res.status(400).send("You are already registred please try after one month");
  }
  else{
    try {
      user = new User(req.body);
      await user.save();
      res.status(201).send("user created");
    } catch (e) {
      res.status(500).send("Something went wrong. Try again later.");
    }
  }

  
});


module.exports = router;