'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('producto', [
      {
        PK_idProducto: 3,
        nombre: "leche",
        categoria: 50,
        precio: 3.90,
        idSupermercado: 2
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto', null, {});
  }
};
