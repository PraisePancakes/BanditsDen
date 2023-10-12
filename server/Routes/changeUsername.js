const express = require("express");
const router = express.Router();
const changeUsername = require("../Controllers/changeUsernameController");
const verifyToken = require("../Middlewares/verifyToken");

router.patch("/:userId", verifyToken, changeUsername);

module.exports = router;
