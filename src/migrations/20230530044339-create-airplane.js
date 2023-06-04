'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelNumber: 
      {
        type: Sequelize.STRING, 
        allowNull:false,
        validate: 
        {
          isAlphanumeric:true,
        }
      },
      capacity:
      {
        type:Sequelize.INTEGER,
        //allowNUll:false
        defaultValue:"0",
        validate:{

          max:800
        }
      } ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};