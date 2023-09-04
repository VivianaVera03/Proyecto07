'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listacompra', [
      {
        PK_idLista: 1,
        idUsuario: 'johndoe',
        nombre: 'Compras Semanales'
      },
      {
        PK_idLista: 2,
        idUsuario: 'janedoe',
        nombre: 'Lista de Mercado'
      },
      {
        PK_idLista: 3,
        idUsuario: 'mikesmith',
        nombre: 'Compras Mensuales'
      },
      {
        PK_idLista: 4,
        idUsuario: 'emilyjones',
        nombre: 'Lista de Ofertas'
      },
      {
        PK_idLista: 5,
        idUsuario: 'davidwilliams',
        nombre: 'Lista para Fiesta'
      },
      {
        PK_idLista: 6,
        idUsuario: 'sarahbrown',
        nombre: 'Lista de Urgencias'
      },
      {
        PK_idLista: 7,
        idUsuario: 'robertjohnson',
        nombre: 'Compras Diarias'
      },
      {
        PK_idLista: 8,
        idUsuario: 'laurasmith',
        nombre: 'Lista de Regalos'
      },
      {
        PK_idLista: 9,
        idUsuario: 'chrismiller',
        nombre: 'Compras de Fin de Semana'
      },
      {
        PK_idLista: 10,
        idUsuario: 'amandawilson',
        nombre: 'Lista de Salud'
      },
      {
        PK_idLista: 11,
        idUsuario: 'viviana',
        nombre: 'Cosas necesarias <3'
      },{
        PK_idLista: 12,
        idUsuario: 'alejandra',
        nombre: 'Para el Hogar :D'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listacompra', null, {});
  }
};
