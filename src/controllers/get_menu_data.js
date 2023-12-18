const User = require("../models/userModel");

const get_menu_data = async (req, res) => {
  try {
    const menu_data = await User.find();
    res.status(200).json({ menu_data });
  } catch (error) {}
};

module.exports = get_menu_data;
