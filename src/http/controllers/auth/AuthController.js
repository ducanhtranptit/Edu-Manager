const model = require("../../../models/index");
const User = model.User;

const handleSendMail = require("../../../utils/sendMail");
const JwtTokenUtils = require("../../../utils/jwt");
const UserUtils = require("../../../utils/user");

const ValidateMiddleware = require("../../middlewares/ValidateMiddleware");

class AuthController {
	async login(req, res) {
		const msg = req.flash("error");
		return res.render("auth/login", {
			msg,
			layout: "layouts/auth.layout.ejs",
		});
	}

	async handleLogin(req, res) {
		const typeId = req.user.dataValues.typeId;
		if (typeId === 1) return res.redirect("/admin");
		if (typeId === 2) return res.redirect("/teacher");
		if (typeId === 3) return res.redirect("/");
	}

	async logout(req, res, next) {
		req.logout(function (err) {
			if (err) {
				return next(err);
			}
			return res.redirect("/auth/login");
		});
	}

	async forgotPassword(req, res) {
		const msg = req.flash("msg");
		return res.render("auth/forgotPassword", {
			msg,
			layout: "layouts/auth.layout.ejs",
		});
	}

	async sendMail(req, res) {
		const { email } = req.body;

		try {
			const user = await UserUtils.checkUserByEmail(email);

			if (user) {
				const token = JwtTokenUtils.createToken(Date.now());

				const title = "Lấy lại mật khẩu";
				const content = `<p>Click vào link dưới đây để đặt lại mật khẩu</p>
				<a href="http://127.0.0.1:8000/auth/reset-password/${token}">Ấn vào đây này</a>`;

				handleSendMail(email, title, content);

				return res.redirect("/auth/login");
			}

			req.flash("msg", "Email không tồn tại!!");
			return res.redirect("/auth/forgot-password");
		} catch (error) {
			return res.render("error/500", { layout: false });
		}
	}

	async resetPassword(req, res) {
		const { token } = req.params;

		const verifyToken = JwtTokenUtils.decode(token);

		console.log(verifyToken);

		if (!verifyToken) {
			return res.render("error/404", { layout: false });
		}
		const msg = req.flash("msg");

		return res.render("auth/resetPassword", {
			msg,
			layout: "layouts/auth.layout.ejs",
		});
	}

	async handleresetPassword(req, res) {
		const { password } = req.body;
		const { token } = req.params;

		const { passwordValidator } = ValidateMiddleware.userValidate(null, null, password);

		if (!passwordValidator) {
			req.flash("msg", "Mật khẩu không đủ mạnh");
			return res.redirect(`/auth/reset-password/${token}`);
		}

		return res.redirect("/auth/login");
	}
}

module.exports = new AuthController();
