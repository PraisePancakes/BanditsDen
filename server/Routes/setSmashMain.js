const express = require("express");
const router = express.Router();
const updateMainsController = require("../Controllers/updateMainsController");

router.patch("/:userId", updateMainsController);
module.exports = router;
