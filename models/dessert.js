'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dessert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dessert.hasMany(models.Menu, { foreignKey: 'dessertId' });
      Dessert.hasMany(models.Souscommande, { foreignKey: 'dessertId' });
    }
  }
  Dessert.init({
    name: DataTypes.STRING,
    token: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    menuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dessert',
  });
  return Dessert;
};