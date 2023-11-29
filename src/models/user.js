"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.belongsTo(models.Type, {
				foreignKey: "typeId",
			});
			User.hasMany(models.Login_token, {
				foreignKey: "userId",
			});
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			phone: DataTypes.STRING,
			address: DataTypes.STRING,
			typeId: DataTypes.INTEGER,
			firstLogin: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
