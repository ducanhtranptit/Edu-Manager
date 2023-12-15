var express = require("express");
var router = express.Router();

const passport = require("passport");

const HomeController = require("../../http/controllers/students/HomeController");
/* GET home page. */
router.get("/", HomeController.index);
router.get("/profile", HomeController.getProfilePage);
router.get("/path-to-google-login", passport.authenticate("google"));

module.exports = router;
