'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Flight, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.Seat, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
    }
  }
  Airplane.init({
    modelNumber: 
    {
      type: DataTypes.STRING, 
      allowNull:false,
      validate: 
      {
        isAlphanumeric:true,
      }
    }
    ,

    capacity:
    {
      type:DataTypes.INTEGER,
      allowNUll:false,
     defaultValue:"0",
      validate:{

        max:800
      }
    } 
  }, 
  {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};