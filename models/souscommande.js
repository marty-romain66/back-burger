'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Souscommande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Souscommande.belongsTo(models.Commande);
      Souscommande.belongsTo(models.Menu, { foreignKey: 'menuId' });
      Souscommande.belongsTo(models.Boisson, { foreignKey: 'boissonId' });
      Souscommande.belongsTo(models.Dessert, { foreignKey: 'dessertId' });
      Souscommande.belongsTo(models.Burger, { foreignKey: 'burgerId' });
    }
  }
  Souscommande.init({
    commandeId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    menuId: DataTypes.INTEGER,
    burgerId: DataTypes.INTEGER,
    dessertId: DataTypes.INTEGER,
    boissonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Souscommande',
  });
  return Souscommande;
};