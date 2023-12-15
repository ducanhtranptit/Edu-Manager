"use strict";
const bcrypt = require("bcrypt");
const saltRound = +process.env.HASH_SALT_ROUND;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert("Users", [
			{
				name: "Trần Đức Anh",
				email: "admin@gmail.com",
				password: bcrypt.hashSync("123456", saltRound),
				typeId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Trần Đức Anh",
				email: "tda.ducanh@gmail.com",
				password: bcrypt.hashSync("123456", saltRound),
				typeId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "nguyen van A",
				email: "student1@gmail.com",
				password: bcrypt.hashSync("123456", saltRound),
				typeId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Users", null, {});

		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
