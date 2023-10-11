const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const changeUsernameRoute = require("./Routes/changeUsername");
const deleteUserRoute = require("./Routes/deleteAccount");
const setSmashMainRoute = require("./Routes/setSmashMain");
const getLeaderboardRoute = require("./Routes/getLeaderboard");
const getSmashCharactersRoute = require("./Routes/getSmashCharacters");
const updateLeaderboardRoute = require("./Routes/updateLeaderboard");

const authRoutes = require("./Routes/Auth/AuthRoutes");

const corsOptions = {
  origin: true,
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

app.use("/auth", authRoutes);
app.use("/leaderboard", getLeaderboardRoute);
app.use("/leaderboard", updateLeaderboardRoute);
app.use("/smashCharacters", getSmashCharactersRoute);
app.use("/setSmashMain", setSmashMainRoute);
app.use("/changeUsername", changeUsernameRoute);
app.use("/deleteUser", deleteUserRoute);
