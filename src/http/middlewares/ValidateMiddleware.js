const validator = require("validator");

class ValidateMiddleware {
	userValidate(name = null, email = null, password = null) {
		let nameValidator = false,
			emailValidator = false,
			passwordValidator = false;
		if (name) {
			nameValidator = true;
		}
		if (email) {
			emailValidator = validator.isEmail(email);
		}
		if (password) {
			passwordValidator = validator.isStrongPassword(password);
		}

		return {
			nameValidator,
			emailValidator,
			passwordValidator,
		};
	}

	tokenValidate(token = null) {
		let tokenValidate = false;
		if (token) {
			tokenValidate = validator.isJWT(token);
		}
		return { tokenValidate };
	}
}

module.exports = new ValidateMiddleware();
