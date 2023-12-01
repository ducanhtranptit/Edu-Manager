var express = require("express");
var router = express.Router();
const HomeController = require("../../http/controllers/students/HomeController");
/* GET home page. */
router.get("/", HomeController.index);
router.get("/profile", HomeController.getProfilePage);

module.exports = router;
