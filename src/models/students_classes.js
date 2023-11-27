'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students_classes.init({
    studentId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    completeDate: DataTypes.DATE,
    dropDate: DataTypes.DATE,
    recover: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Students_classes',
  });
  return Students_classes;
};