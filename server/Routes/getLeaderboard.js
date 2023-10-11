const express = require("express");
const router = express.Router();
const getLeaderboard = require("../Controllers/getLeaderboardController");

router.get("/", getLeaderboard);

module.exports = router;
