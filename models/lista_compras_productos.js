const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lista_compras_productos', {
    idListado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idLista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'listacompra',
        key: 'PK_idLista'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producto',
        key: 'PK_idProducto'
      }
    }
  }, {
    sequelize,
    tableName: 'lista_compras_productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idListado" },
        ]
      },
      {
        name: "idLista",
        using: "BTREE",
        fields: [
          { name: "idLista" },
        ]
      },
      {
        name: "idProducto",
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
    ]
  });
};
