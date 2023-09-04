const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    PK_idProducto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'PK_idCategoria'
      }
    },
    precio: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    codigoBarras: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    idSupermercado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supermercado',
        key: 'PK_idSupermercado'
      }
    }
  }, {
    sequelize,
    tableName: 'producto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_idProducto" },
        ]
      },
      {
        name: "idSupermercado",
        using: "BTREE",
        fields: [
          { name: "idSupermercado" },
        ]
      },
      {
        name: "categoria",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
