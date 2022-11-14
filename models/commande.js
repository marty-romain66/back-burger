'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commande.belongsTo(models.Menu, { foreignKey: 'menuId' });
      Commande.hasMany(models.Souscommande, { foreignKey: 'commandeId' });
    }
  }
  Commande.init({
    clientName: DataTypes.STRING,
    menuId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    horaire: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commande',
  });
  return Commande;
};