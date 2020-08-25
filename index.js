// require all dependencies
require('dotenv').config()
const express = require("express");
const app = express();

// add all middlewares
// == calls my mongoose connection to cleanup this file
require("./config/db");
// == allows me to receive JSON files from HEADER of REQUEST
app.use(express.json());

// setup my routes

// 404 errors

// setup the server port
app.listen(process.env.PORT, () =>
    console.log(`running on ${process.env.PORT}`)
)