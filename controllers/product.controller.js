const { Producto } = require("../models");

exports.obtenerProductos = async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
};
