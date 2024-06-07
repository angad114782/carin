const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");
const verifyToken = require("../middlewares/verifyToken.js");

router.post("/signup", authController.register);
router.post("/signin", authController.login);
router.get("/profile", verifyToken, authController.getProfile);

module.exports = router;
