'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        PK_idUsuario: 'johndoe',
        nombre: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        PK_idUsuario: 'janedoe',
        nombre: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
      {
        PK_idUsuario: 'mikesmith',
        nombre: 'Mike Smith',
        email: 'mike.smith@example.com',
      },
      {
        PK_idUsuario: 'emilyjones',
        nombre: 'Emily Jones',
        email: 'emily.jones@example.com',
      },
      {
        PK_idUsuario: 'davidwilliams',
        nombre: 'David Williams',
        email: 'david.williams@example.com',
      },
      {
        PK_idUsuario: 'sarahbrown',
        nombre: 'Sarah Brown',
        email: 'sarah.brown@example.com',
      },
      {
        PK_idUsuario: 'robertjohnson',
        nombre: 'Robert Johnson',
        email: 'robert.johnson@example.com',
      },
      {
        PK_idUsuario: 'laurasmith',
        nombre: 'Laura Smith',
        email: 'laura.smith@example.com',
      },
      {
        PK_idUsuario: 'chrismiller',
        nombre: 'Chris Miller',
        email: 'chris.miller@example.com',
      },
      {
        PK_idUsuario: 'amandawilson',
        nombre: 'Amanda Wilson',
        email: 'amanda.wilson@example.com',
      },
      {
        PK_idUsuario: 'viviana',
        nombre: 'Viviana Vera',
        email: 'vivianavera@example.com',
      },
      {
        PK_idUsuario: 'alejandra',
        nombre: 'Alejandra Cotrina',
        email: 'alejandracotrina@example.com',
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
