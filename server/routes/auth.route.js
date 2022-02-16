const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

// Register
router.post("/register", authController.register);
router.post("/signin", authController.signIn);
router.get("/isauth", authController.isAuth);

module.exports = router;
