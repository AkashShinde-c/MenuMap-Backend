const {S3Client,GetObjectCommand,PutObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')
require('dotenv').config({path:'../../.env'});

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: "AKIA2Z5Q7QNVOZYKXC65",
    secretAccessKey: "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",
  },
});


 

module.exports = s3Client;
