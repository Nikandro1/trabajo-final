'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tarea.belongsTo(models.Categoria, {
        foreignKey: 'idCategoria',
        as:'categoria'
      })
      Tarea.belongsTo(models.User, {
        foreignKey:'idUser',
        as:'usuario'
      })
    }
  }
  Tarea.init({
    descripcion: DataTypes.STRING,
    completada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tarea',
    timestamps:false
  });
  return Tarea;
};