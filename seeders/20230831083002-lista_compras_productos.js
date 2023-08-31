'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lista_compras_productos', [
      {
        idListado: 1,
        idLista: 1,
        idProducto: 1,
      },
      {
        idListado: 2,
        idLista: 2,
        idProducto: 3,
      },
      {
        idListado: 3,
        idLista: 3,
        idProducto: 2,
      },
      {
        idListado: 4,
        idLista: 4,
        idProducto: 4,
      },
      {
        idListado: 5,
        idLista: 5,
        idProducto: 5,
      },
      {
        idListado: 6,
        idLista: 6,
        idProducto: 1,
      },
      {
        idListado: 7,
        idLista: 7,
        idProducto: 3,
      },
      {
        idListado: 8,
        idLista: 8,
        idProducto: 2,
      },
      {
        idListado: 9,
        idLista: 9,
        idProducto: 4,
      },
      {
        idListado: 10,
        idLista: 10,
        idProducto: 5,
      },
      {
        idListado: 11,
        idLista: 11,
        idProducto: 3,
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lista_compras_productos', null, {});
  }
};
