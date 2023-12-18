// controllers/userController.js
const User = require('../models/userModel'); // Import the User model

// Controller to handle storing user data
const createUser = async (req, res) => {
  try {
    const { username, password, location, menu_image_url, menu_text } = req.body;

    // Create a new user document using the User model
    const newUser = new User({ username, password, location, menu_image_url, menu_text });

    // Save the user document to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser };
