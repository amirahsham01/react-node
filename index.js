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
app.use("/api/items", require("./routes/item.route"));

// 404 errors
app.get("*", (req, res) => {
    res.status(404).json({ message: "estas perdido", code: "EB404" });
});


// setup the server port
app.listen(process.env.PORT, () =>
    console.log(`running on ${process.env.PORT}`)
)