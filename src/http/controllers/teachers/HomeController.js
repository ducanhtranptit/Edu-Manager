const model = require("../../../models/index");
class HomeController {
	index(req, res) {
		return res.render("teachers/home/index");
	}
}

module.exports = new HomeController();
