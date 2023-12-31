const User = require("../models/userModel");
const { v4 } = require("uuid");
const { putObject, getObjectURL } = require("../utils/awsurlutils");

const upload_menu = async (req, res) => {
  try {
    const userId = req.user.id;
    const url = await putObject(`${userId}.jpeg`, "image/jpeg");
    let date = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear();
    await User.findByIdAndUpdate(userId, {
      $set: { menu_image_url: userId,date:date,is_menu_updated:true },
    });  
    res.status(200).json({ url: url, message: "Created an upload url" });
  } catch (error) {}
};

const download_menu = async (req, res) => {
  try {
    const user_id = req.user.id;

    const user = await User.findById(user_id);

    const url = await getObjectURL(
      `uploads/user-uploads/${user.menu_image_url}.jpeg`
    );
    res.status(200).json({ url: url, is_menu_updated:user.is_menu_updated||false });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { upload_menu, download_menu };
