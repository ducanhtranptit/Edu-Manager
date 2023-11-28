class AuthController {
	async login(req, res) {
		res.render("auth/login", {
			layout: "layouts/auth.layout.ejs",
		});
	}

	async register(req, res) {
		res.render("auth/register", {
			layout: "layouts/auth.layout.ejs",
		});
	}
}

module.exports = new AuthController();
