const { getObjectURL } = require("../utils/awsurlutils");

const get_image_url = async(req, res)=>{
    try {
        const {img_name} = req.body;
    
        const url = await getObjectURL(`uploads/user-uploads/${img_name}.jpeg`);
        res.status(200).json({url:url});
    } catch (error) {
        res.status(500).json({error:"An error occured"});
    }
}

module.exports = get_image_url;