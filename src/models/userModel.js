  const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    location:{lat:String,lng:String},
    menu_image_url:String,
    menu_text:String,
    mess_name:String,
    owner_name:String,
    default_menu:String,
    date:  Date,
    is_menu_updated:Boolean,
    last_updated:String
})

const User = mongoose.model('User',userSchema);

module.exports = User