const express = require("express");
const { createUser } = require("../controllers/test");
const createAccount = require("../controllers/create_account");
const login = require("../controllers/login");
const authenticate = require("../middleware/authenticate");
const {
  upload_menu,
  download_menu,
} = require("../controllers/upload_download_menu");
const get_menu_data = require("../controllers/get_menu_data");
const get_image_url = require("../controllers/get_image_url");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is a route!");
});

router.post("/save-user", createUser);

router.post("/create-account", createAccount);

router.post("/login", login);

router.get("/get-upload-url", authenticate, upload_menu);

router.get("/get-download-url", authenticate, download_menu);

router.get("/get-menu-data", get_menu_data);

router.get("/get-image-url", get_image_url);
module.exports = router;
