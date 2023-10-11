const express = require("express");
const registerController = require("../../Controllers/Auth/registerController");
const router = express.Router();
const loginController = require("../../Controllers/Auth/loginController");
const verifyToken = require("../../Middlewares/verifyToken");
const getUserController = require("../../Controllers/Auth/getUserController");
const refreshTokenController = require("../../Controllers/Auth/refreshTokenController");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/user", verifyToken, getUserController);
router.post("/refresh", refreshTokenController);

module.exports = router;
