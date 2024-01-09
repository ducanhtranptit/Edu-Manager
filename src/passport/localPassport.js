const bcrypt = require("bcrypt");

const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");

const User = model.User;

module.exports = new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password",
	},

	async function (email, password, done) {
		const user = await User.findOne({
			where: {
				email,
			},
		});

		if (!user) {
			done(null, false, { message: "Email không tồn tại" });
			return;
		}

		const checkPassword = bcrypt.compareSync(password, user.password);

		if (checkPassword) {
			done(null, user);
			return;
		} else {
			done(null, false, {
				message: "Mật khẩu không chính xác",
			});
		}
	}
);
