const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
    PK_idCategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK_idCategoria" },
        ]
      },
    ]
  });
};
