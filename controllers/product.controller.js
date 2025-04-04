const { Product } = require("../models");

exports.obtenerProductos = async (req, res) => {
  const productos = await Product.findAll();
  res.json(productos);
};

exports.crearProducto = async (req, res) => {
  const producto = await Product.create(req.body);
  res.status(201).json(producto);
};
