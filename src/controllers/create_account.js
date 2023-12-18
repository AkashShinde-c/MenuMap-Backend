const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config({path:'../../.env'});

const createAccount = async (req, res) => {
  try {
    const { username, password, location, mess_name, owner_name } = req.body;

    const existingUser = await User.exists({ username:username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({
      username,
      password: hashedPassword,
      location:location||{},
      mess_name:mess_name||"",
      owner_name:owner_name||"",
      
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id },process.env.JWT_SECRET, {
      expiresIn: "7000d",
    });

    res.status(201).json({message:"User created successfully",token});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createAccount;
