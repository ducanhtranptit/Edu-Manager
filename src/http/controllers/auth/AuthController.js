const bcrypt = require("bcrypt");

const model = require("../../../models/index");
const User = model.User;

const saltRound = +process.env.HASH_SALT_ROUND;

class AuthController {
	async login(req, res) {
		return res.render("auth/login", {
			layout: "layouts/auth.layout.ejs",
		});
	}

	async logout(req, res, next) {
		req.logout(function (err) {
			if (err) {
				return next(err);
			}
			console.log("9999");
			return res.redirect("/auth/login");
		});
	}

	async forgotPassword(req, res) {
		res.render("auth/forgotPassword", {
			layout: "layouts/auth.layout.ejs",
		});
	}
}

module.exports = new AuthController();
