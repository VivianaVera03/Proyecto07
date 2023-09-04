'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lista_compras_productos', [
      {
        idLista: 1,
        idProducto: 1,
      },
      {
        idLista: 2,
        idProducto: 3,
      },
      {
        idLista: 3,
        idProducto: 2,
      },
      {
        idLista: 4,
        idProducto: 4,
      },
      {
        idLista: 5,
        idProducto: 5,
      },
      {
        idLista: 6,
        idProducto: 1,
      },
      {
        idLista: 7,
        idProducto: 3,
      },
      {
        idLista: 8,
        idProducto: 2,
      },
      {
        idLista: 9,
        idProducto: 4,
      },
      {
        idLista: 10,
        idProducto: 5,
      },
      {
        idLista: 11,
        idProducto: 3,
      },
      {
        idLista: 11,
        idProducto: 2,
      },
      {
        idLista: 11,
        idProducto: 1,
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lista_compras_productos', null, {});
  }
};
