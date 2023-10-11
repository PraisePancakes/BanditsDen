const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const connectURI = process.env.CONNECT_URI;
const portNum = process.env.PORT_NUMBER;

mongoose
  .connect(connectURI)
  .then(console.log("SUCCESS DB CONNECT"))
  .then(
    app.listen(portNum, function (err) {
      if (err) console.log("Error in server setup");
      console.log("Server listening on Port", portNum);
    })
  );
