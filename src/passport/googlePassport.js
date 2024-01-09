//Xử lý đăng nhập thông qua mạng xã hội
const GoogleStrategy = require("passport-google-oidc");
const model = require("../models/index");
const User = model.User;

module.exports = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL,
		passReqToCallback: true,
		scope: ["profile", "email"],
	},

	async (req, _, profile, done) => {
		console.log(req.isAuthenticated());
		const { displayName, emails } = profile;
		const [{ value: email }] = emails;

		const user = await User.findOne({
			where: {
				email: email,
			},
		});

		done(null, user);
		return;
	}
);
