'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.Burger, { foreignKey: 'burgerId' });
      Menu.belongsTo(models.Boisson, { foreignKey: 'boissonId' });
      Menu.belongsTo(models.Dessert, {
        foreignKey: 'dessertId',
      })
      Menu.hasOne(models.Commande, { foreignKey: 'menuId' }); 
      Menu.belongsTo(models.Souscommande, { foreignKey: 'menuId' });
      Menu.hasMany(models.Souscommande, { foreignKey: 'menuId' });
    }

  };
  Menu.init({
    name: DataTypes.STRING,
    token : DataTypes.STRING,
    burgerId: DataTypes.INTEGER,
    accompagnementId: DataTypes.INTEGER,
    boissonId: DataTypes.INTEGER,
    dessertId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};