const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("../../http/controllers/auth/AuthController");

/* GET home page. */
router.get("/login", AuthController.login);
router.post(
	"/login",
	passport.authenticate("local", {
		failureRedirect: "/auth/login",
		failureFlash: true,
		successRedirect: "/",
	})
);
router.get("/register", AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/logout", AuthController.logout);

module.exports = router;
