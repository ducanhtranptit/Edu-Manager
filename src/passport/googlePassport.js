//Xử lý đăng nhập thông qua mạng xã hội
const GoogleStrategy = require("passport-google-oidc");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL,
		scope: ["profile", "email"],
	},

	async (issuer, profile, done) => {
		const { displayName, emails } = profile;
		const [{ value: email }] = emails;
		const user = await User.findOne({
			where: {
				email: email,
			},
		});

		console.log(profile);
		done(null, user);
		return;
	}
);
