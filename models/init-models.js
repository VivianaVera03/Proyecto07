var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _cliente = require("./cliente");
var _lista_compras_productos = require("./lista_compras_productos");
var _listacompra = require("./listacompra");
var _producto = require("./producto");
var _supermercado = require("./supermercado");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var lista_compras_productos = _lista_compras_productos(sequelize, DataTypes);
  var listacompra = _listacompra(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var supermercado = _supermercado(sequelize, DataTypes);

  producto.belongsTo(categoria, { as: "categoria_categorium", foreignKey: "categoria"});
  categoria.hasMany(producto, { as: "productos", foreignKey: "categoria"});
  listacompra.belongsTo(cliente, { as: "idUsuario_cliente", foreignKey: "idUsuario"});
  cliente.hasMany(listacompra, { as: "listacompras", foreignKey: "idUsuario"});
  lista_compras_productos.belongsTo(listacompra, { as: "idLista_listacompra", foreignKey: "idLista"});
  listacompra.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "idLista"});
  lista_compras_productos.belongsTo(producto, { as: "idProducto_producto", foreignKey: "idProducto"});
  producto.hasMany(lista_compras_productos, { as: "lista_compras_productos", foreignKey: "idProducto"});
  producto.belongsTo(supermercado, { as: "idSupermercado_supermercado", foreignKey: "idSupermercado"});
  supermercado.hasMany(producto, { as: "productos", foreignKey: "idSupermercado"});

  return {
    categoria,
    cliente,
    lista_compras_productos,
    listacompra,
    producto,
    supermercado,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
