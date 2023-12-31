const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("../../http/controllers/auth/AuthController");
const AuthMiddleware = require("../../http/middlewares/AuthMiddleware");

router.get("/logout", AuthController.logout);

router.use(AuthMiddleware);

/* GET home page. */
router.get("/login", AuthController.login);
router.post(
	"/login",
	passport.authenticate("local", {
		failureRedirect: "/auth/login",
		failureFlash: true,
	}),
	AuthController.handleLogin
);

router.get("/google/redirect", passport.authenticate("google"));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/auth/login",
		failureMessage: true,
		successRedirect: "/",
	})
);

router.get("/forgot-password", AuthController.forgotPassword);
router.post("/forgot-password", AuthController.sendMail);

router.get("/reset-password/:token", AuthController.resetPassword);
router.post("/reset-password/:token", AuthController.handleresetPassword);

module.exports = router;
