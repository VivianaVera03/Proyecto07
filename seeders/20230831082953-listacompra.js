'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listacompra', [
      {
        PK_idLista: 1,
        idUsuario: 'johndoe',
        nombre: 'Compras Semanales',
        creation_date: new Date('2023-08-21 10:00:00'),
      },
      {
        PK_idLista: 2,
        idUsuario: 'janedoe',
        nombre: 'Lista de Mercado',
        creation_date: new Date('2023-08-21 11:30:00'),
      },
      {
        PK_idLista: 3,
        idUsuario: 'mikesmith',
        nombre: 'Compras Mensuales',
        creation_date: new Date('2023-08-20 15:45:00'),
      },
      {
        PK_idLista: 4,
        idUsuario: 'emilyjones',
        nombre: 'Lista de Ofertas',
        creation_date: new Date('2023-08-19 09:15:00'),
      },
      {
        PK_idLista: 5,
        idUsuario: 'davidwilliams',
        nombre: 'Lista para Fiesta',
        creation_date: new Date('2023-08-18 18:20:00'),
      },
      {
        PK_idLista: 6,
        idUsuario: 'sarahbrown',
        nombre: 'Lista de Urgencias',
        creation_date: new Date('2023-08-17 14:00:00'),
      },
      {
        PK_idLista: 7,
        idUsuario: 'robertjohnson',
        nombre: 'Compras Diarias',
        creation_date: new Date('2023-08-16 12:30:00'),
      },
      {
        PK_idLista: 8,
        idUsuario: 'laurasmith',
        nombre: 'Lista de Regalos',
        creation_date: new Date('2023-08-15 08:00:00'),
      },
      {
        PK_idLista: 9,
        idUsuario: 'chrismiller',
        nombre: 'Compras de Fin de Semana',
        creation_date: new Date('2023-08-14 16:45:00'),
      },
      {
        PK_idLista: 10,
        idUsuario: 'amandawilson',
        nombre: 'Lista de Salud',
        creation_date: new Date('2023-08-13 20:10:00'),
      },
      {
        PK_idLista: 11,
        idUsuario: 'viviana',
        nombre: 'Cosas necesarias',
        creation_date: new Date('2023-08-01 00:00:00'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listacompra', null, {});
  }
};
