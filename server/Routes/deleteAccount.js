const express = require("express");
const router = express.Router();
const deleteAccount = require("../Controllers/deleteAccController");

router.delete("/:userId", deleteAccount);

module.exports = router;
