'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('producto', [
      {
        PK_idProducto: 1,
        nombre: 'Arroz',
        categoria: 1,
        precio: 2.99,
        codigoBarras: '1234567890123',
        idSupermercado: 1,
      },
      {
        PK_idProducto: 2,
        nombre: 'Pelota de Fútbol',
        categoria: 2,
        precio: 19.99,
        codigoBarras: '9876543210987',
        idSupermercado: 2,
      },
      {
        PK_idProducto: 3,
        nombre: 'Detergente',
        categoria: 3,
        precio: 4.49,
        codigoBarras: '5678901234567',
        idSupermercado: 3,
      },
      {
        PK_idProducto: 4,
        nombre: 'Platos Desechables',
        categoria: 4,
        precio: 3.75,
        codigoBarras: '5432109876543',
        idSupermercado: 4,
      },
      {
        PK_idProducto: 5,
        nombre: 'Martillo',
        categoria: 5,
        precio: 9.50,
        codigoBarras: '6789054321098',
        idSupermercado: 5,
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto', null, {});
  }
};
