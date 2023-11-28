const express = require("express");
const router = express.Router();

const AuthController = require("../../http/controllers/auth/AuthController");

/* GET home page. */
router.get("/login", AuthController.login);
router.get("/register", AuthController.register);

module.exports = router;
