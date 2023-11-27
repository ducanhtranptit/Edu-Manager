'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise_submit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercise_submit.init({
    studentId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    attachment: DataTypes.STRING,
    exerciseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exercise_submit',
  });
  return Exercise_submit;
};