'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      {
        PK_idCategoria: 1,
        nombre: 'comestibles',
      },
      {
        PK_idCategoria: 2,
        nombre: 'deportes',
      },
      {
        PK_idCategoria: 3,
        nombre: 'limpieza',
      },
      {
        PK_idCategoria: 4,
        nombre: 'desechables',
      },
      {
        PK_idCategoria: 5,
        nombre: 'ferreteria',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
