'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Burger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Burger.hasMany(models.Menu, { foreignKey: 'burgerId' });
      Burger.hasMany(models.Souscommande, { foreignKey: 'burgerId' });
    }
  }
  Burger.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    token: DataTypes.STRING,
    menuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Burger',
  });
  return Burger;
};