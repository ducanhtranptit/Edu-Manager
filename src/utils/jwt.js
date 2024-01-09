const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const accessTokenAviliableTime = process.env.JWT_ACCESSTOKEN_AVALIABLE_TIME;

class JwtToken {
	createToken(data) {
		const token = jwt.sign({ data }, jwtSecretKey, {
			expiresIn: accessTokenAviliableTime * 60,
		});

		return token;
	}

	decode(token) {
		try {
			const decode = jwt.verify(token, jwtSecretKey);
			return decode.data;
		} catch (error) {
			return false;
		}
	}
}

module.exports = new JwtToken();
