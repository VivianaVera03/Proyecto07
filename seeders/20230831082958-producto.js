"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "producto",
      [
        {
          PK_idProducto: 1,
          nombre: "Arroz",
          categoria: 1,
          precio: 2.99,
          codigoBarras: "1234567890123",
          idSupermercado: 1,
        },
        {
          PK_idProducto: 2,
          nombre: "Pelota de Fútbol",
          categoria: 2,
          precio: 19.99,
          codigoBarras: "9876543210987",
          idSupermercado: 2,
        },
        {
          PK_idProducto: 3,
          nombre: "Detergente",
          categoria: 3,
          precio: 4.49,
          codigoBarras: "5678901234567",
          idSupermercado: 3,
        },
        {
          PK_idProducto: 4,
          nombre: "Platos Desechables",
          categoria: 4,
          precio: 3.75,
          codigoBarras: "5432109876543",
          idSupermercado: 4,
        },
        {
          PK_idProducto: 5,
          nombre: "Martillo",
          categoria: 5,
          precio: 9.5,
          codigoBarras: "6789054391098",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 6,
          nombre: "Sopa - Knorr, Veg / Beef",
          categoria: 1,
          precio: 0.88,
          codigoBarras: "7725340429834",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 7,
          nombre: "The Pop Shoppe - Cream Soda",
          categoria: 1,
          precio: 14.19,
          codigoBarras: "5897063262002",
          idSupermercado: 1,
        },
        {
          PK_idProducto: 8,
          nombre: "Pie Filling - Apple",
          categoria: 1,
          precio: 11.62,
          codigoBarras: "4887195601346",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 9,
          nombre: "Pastry - Apple Large",
          categoria: 1,
          precio: 13.4,
          codigoBarras: "4853275282446",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 10,
          nombre: "Kohlrabi",
          categoria: 1,
          precio: 9.24,
          codigoBarras: "5614512725894",
          idSupermercado: 5,
        },

        {
          PK_idProducto: 11,
          nombre: "Pasta - Cappellini, Dry",
          categoria: 1,
          precio: 12.11,
          codigoBarras: "4092655871016",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 12,
          nombre: "Bacardi Raspberry",
          categoria: 1,
          precio: 12.61,
          codigoBarras: "8982961706705",
          idSupermercado: 4,
        },
        {
          PK_idProducto: 13,
          nombre: "Pate - Liver",
          categoria: 1,
          precio: 0.92,
          codigoBarras: "1480615329451",
          idSupermercado: 4,
        },
        {
          PK_idProducto: 14,
          nombre: "Energy Drink - Redbull 355ml",
          categoria: 1,
          precio: 8.03,
          codigoBarras: "5152340431758",
          idSupermercado: 5,
        },
        {
          PK_idProducto: 15,
          nombre: "Bouillion - Pescado",
          categoria: 1,
          precio: 6.67,
          codigoBarras: "6670209063970",
          idSupermercado: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("producto", null, {});
  },
};
