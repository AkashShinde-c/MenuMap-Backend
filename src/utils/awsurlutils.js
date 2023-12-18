const {GetObjectCommand,PutObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')
const s3Client = require('../db/aws')
require('dotenv').config({path:'../../.env'});

async function getObjectURL(key) {
    const command = new GetObjectCommand({
      Bucket:process.env.AWS_BUCKET,
      Key: key,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
  }
  
  async function putObject(filename, contentType) {
    const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: `uploads/user-uploads/${filename}`,
    ContentType: contentType,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
    }

 const test = async()=>{
    console.log(await getObjectURL('test01.png'))
 }   

//  test();

module.exports = {getObjectURL,putObject}