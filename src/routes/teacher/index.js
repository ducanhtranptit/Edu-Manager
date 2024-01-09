var express = require("express");
var router = express.Router();

const HomeController = require("../../http/controllers/teachers/HomeController");

/* GET home page. */
router.get("/", HomeController.index);

module.exports = router;
