'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        PK_idUsuario: 'johndoe',
        nombre: 'John Doe',
        email: 'john.doe@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'janedoe',
        nombre: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: "uF7{_%0}pb"
      },
      {
        PK_idUsuario: 'mikesmith',
        nombre: 'Mike Smith',
        email: 'mike.smith@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'emilyjones',
        nombre: 'Emily Jones',
        email: 'emily.jones@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'davidwilliams',
        nombre: 'David Williams',
        email: 'david.williams@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'sarahbrown',
        nombre: 'Sarah Brown',
        email: 'sarah.brown@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'robertjohnson',
        nombre: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        password: "pT9.cyNB"
      },
      {
        PK_idUsuario: 'laurasmith',
        nombre: 'Laura Smith',
        email: 'laura.smith@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'chrismiller',
        nombre: 'Chris Miller',
        email: 'chris.miller@example.com',
        password: "rF2/@Pws=Alz"
      },
      {
        PK_idUsuario: 'amandawilson',
        nombre: 'Amanda Wilson',
        email: 'amanda.wilson@example.com',
        password: "oF6=HO~yahyt"
      },
      {
        PK_idUsuario: 'viviana',
        nombre: 'Viviana Vera',
        email: 'vivianavera@example.com',
        password: "zY3*&GhE!"
      },
      {
        PK_idUsuario: 'alejandra',
        nombre: 'Alejandra Cotrina',
        email: 'alejandracotrina@example.com',
        password: "zY3*&GhE!"
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
