const express = require("express");
const router = express.Router();
const changeUsername = require("../Controllers/changeUsernameController");

router.patch("/:userId", changeUsername);

module.exports = router;
