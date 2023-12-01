const model = require("../../../models/index");
class HomeController {
	index(req, res) {
		res.render("students/home/index");
	}

	getProfilePage(req, res) {
		res.render("students/profile/index");
	}
}

module.exports = new HomeController();
