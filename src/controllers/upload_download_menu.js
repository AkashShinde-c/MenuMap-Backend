const User = require("../models/userModel");
const { v4 } = require("uuid");
const { putObject, getObjectURL } = require("../utils/awsurlutils");

const upload_menu = async (req, res) => {
  try {
    const userId = req.user.id;

    const filename = v4();
    const url = await putObject(`${filename}.jpeg`, "image/jpeg");
    let date = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear();
    await User.findByIdAndUpdate(userId, {
      $set: { menu_image_url: filename,date:date },
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
    console.log(url);
    res.status(200).json({ url: url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = { upload_menu, download_menu };
