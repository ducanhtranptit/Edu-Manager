const bcrypt = require("bcrypt");

const model = require("../../../models/index");
const User = model.User;

const handleSendMail = require("../../../utils/sendMail");
const JwtToken = require("../../../utils/jwt");

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
		return res.render("auth/forgotPassword", {
			layout: "layouts/auth.layout.ejs",
		});
	}

	async sendMail(req, res) {
		const { email } = req.body;

		const token = JwtToken.createToken(Date.now());

		const title = "Lấy lại mật khẩu";
		const content = `<p>Click vào link dưới đây để đặt lại mật khẩu</p>
		<a href="http://127.0.0.1:8000/auth/reset-password/${token}">Ấn vào đây này</a>`;

		handleSendMail(email, title, content);

		return res.redirect("/auth/login");
	}

	async resetPassword(req, res) {
		return res.render("auth/resetPassword", {
			layout: false,
		});
	}

	async handleresetPassword(req, res) {
		const { password } = req.body;
		return res.redirect("/auth/login");
	}
}

module.exports = new AuthController();
