const model = require("../models/index");
const User = model.User;

class UserUtils {
	async checkUserByEmail(email) {
		const user = await User.findOne({
			where: {
				email: email,
			},
		});

		return user;
	}
}
module.exports = new UserUtils();
