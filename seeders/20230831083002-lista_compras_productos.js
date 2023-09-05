'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lista_compras_productos', [
      {
        PK_id: 1,
        idLista: 1,
        idProducto: 1,
      },
      {
        PK_id: 2,
        idLista: 2,
        idProducto: 3,
      },
      {
        PK_id: 3,
        idLista: 3,
        idProducto: 2,
      },
      {
        PK_id: 4,
        idLista: 4,
        idProducto: 4,
      },
      {
        PK_id: 5,
        idLista: 5,
        idProducto: 5,
      },
      {
        PK_id: 6,
        idLista: 6,
        idProducto: 1,
      },
      {
        PK_id: 7,
        idLista: 7,
        idProducto: 3,
      },
      {
        PK_id: 8,
        idLista: 8,
        idProducto: 2,
      },
      {
        PK_id: 9,
        idLista: 9,
        idProducto: 4,
      },
      {
        PK_id: 10,
        idLista: 10,
        idProducto: 5,
      },
      {
        PK_id: 11,
        idLista: 11,
        idProducto: 3,
      },
      {
        PK_id: 12,
        idLista: 11,
        idProducto: 2,
      },
      {
        PK_id: 13,
        idLista: 11,
        idProducto: 1,
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lista_compras_productos', null, {});
  }
};
