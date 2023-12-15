const model = require("../../../models/index");
class HomeController {
	index(req, res) {
		return res.render("students/home/index");
	}

	getProfilePage(req, res) {
		const userName = req.user.name;
		return res.render("students/profile/index", { userName });
	}
}

module.exports = new HomeController();
