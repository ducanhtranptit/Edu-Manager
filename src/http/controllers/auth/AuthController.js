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

	async register(req, res) {
		return res.render("auth/register", {
			layout: "layouts/auth.layout.ejs",
		});
	}

	async handleRegister(req, res) {
		const { name, email, password } = req.body;

		try {
			const user = await User.findOne({
				where: {
					email: email,
				},
			});

			if (!user) {
				const hashPassword = bcrypt.hashSync(password, saltRound);

				await User.create({
					name: name,
					email: email,
					password: hashPassword,
				});
				return res.redirect("/auth/login");
			}
			return res.redirect("/auth/register");
		} catch (error) {
			return res.render("error/500", { layout: false });
		}
	}

	async logout(req, res, next) {
		req.logout(function (err) {
			if (err) {
				return next(err);
			}
			res.redirect("/auth/login");
		});
	}
}

module.exports = new AuthController();
