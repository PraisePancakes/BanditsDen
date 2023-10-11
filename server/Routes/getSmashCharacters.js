const express = require("express");
const router = express.Router();
const getSmashCharacters = require("../Controllers/getSmashCharactersController");

router.get("/", getSmashCharacters);

module.exports = router;
