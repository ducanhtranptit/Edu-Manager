'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher_calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher_calendar.init({
    teacherId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    scheduleDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Teacher_calendar',
  });
  return Teacher_calendar;
};