'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('supermercado', [
      {
        PK_idSupermercado: 1,
        nombre: 'Supermaxi Urdesa',
        direccion: 'Barrio las Lomas, Av. Del Rotarismo No. 3 Cdla Urdesa Central, Mz 41.',
      },
      {
        PK_idSupermercado: 2,
        nombre: 'Supermaxi Ciudad Celeste',
        direccion: 'Av. León Febres Cordero. Ribadeneyra - Centro Comercial La Piazza. Ciudad Celeste',
      },
      {
        PK_idSupermercado: 3,
        nombre: 'Supermaxi Vía a la Costa',
        direccion: 'Vía a la Costa Km 13',
      },
      {
        PK_idSupermercado: 4,
        nombre: 'Supermaxi La Joya',
        direccion: 'Av. León Febres Cordero Km 14 1/2 (CC La Piazza - La Joya)',
      },
      {
        PK_idSupermercado: 5,
        nombre: 'Megamaxi City Mall',
        direccion: 'Av. Felipe Pezo s/n y Av Benjamín Carrión',
      },
      {
        PK_idSupermercado: 6,
        nombre: 'Supermaxi Ceibos',
        direccion: 'C.C. Riocentro Ceibos',
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('supermercado', null, {});
  }
};
