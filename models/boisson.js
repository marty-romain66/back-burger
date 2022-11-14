'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Boisson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Boisson.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    menuId: DataTypes.INTEGER,
    token: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Boisson',
  });
  return Boisson;
};