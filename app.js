const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require('./src/routes/user_routes');
const mongoose = require("./src/db/mongoose");
require('dotenv').config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests with JSON and URL-encoded payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes config
app.use("/", routes);

// Start the server
 
      app.listen(process.env.PORT||80,'0.0.0.0');
      console.log("Server is running", port);
 

  
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });