const model = require("../../../models/index");
class HomeController {
	index(req, res) {
		return res.render("students/home/index");
	}

	getProfilePage(req, res) {
		const userName = req.user.name;
		let socials = "...";
		const msg = "";
		return res.render("students/profile/index", { userName, socials, msg });
	}
}

module.exports = new HomeController();
