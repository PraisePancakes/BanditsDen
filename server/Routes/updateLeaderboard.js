const express = require("express");
const router = express.Router();
const updateLeaderboard = require("../Controllers/updateLeaderboardController");

router.patch("/:id", updateLeaderboard);

module.exports = router;
