'use strict';

/** @type {import('sequelize-cli').Migration} */
const{Op}=require('sequelize');

module.exports = {

  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
      {
      modelNumber:'AirIndia330',
      capacity:590,
      createdAt:new Date(),
      updatedAt:new Date()
      },
      {
        modelNumber:'AirMaldives',
        capacity:900,
        createdAt:new Date(),
        updatedAt:new Date()
      }

     ])
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',
    {
      [Op.or]:[
        {modelNumber: 'AirIndia330'},
        {modelNumber:'AirMaldives'}
      ]
    });
  }
};
