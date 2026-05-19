const productos = require('../models/productos');

const getProductos = (req, res) => {
  let lista = productos;
  if (req.query.categoria) {
    lista = lista.filter(p => p.categoria === req.query.categoria);
  }
  res.json(lista);
};

const getProductoById = (req, res) => {
  const producto = productos.find(p => p.id === req.params.id);
  if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
  res.json(producto);
};

const createProducto = (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen_url } = req.body;
  if (!nombre || !precio || !stock || !categoria) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos: nombre, precio, stock, categoria" });
  }
  const nuevo = {
    id: "prod-" + String(productos.length + 1).padStart(3, '0'),
    nombre,
    descripcion: descripcion || "",
    precio,
    stock,
    categoria,
    imagen_url: imagen_url || "",
    activo: true
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
};

const updateProducto = (req, res) => {
  const producto = productos.find(p => p.id === req.params.id);
  if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
  const { nombre, descripcion, precio, stock, categoria, imagen_url, activo } = req.body;
  if (nombre) producto.nombre = nombre;
  if (descripcion) producto.descripcion = descripcion;
  if (precio) producto.precio = precio;
  if (stock) producto.stock = stock;
  if (categoria) producto.categoria = categoria;
  if (imagen_url) producto.imagen_url = imagen_url;
  if (activo !== undefined) producto.activo = activo;
  res.json(producto);
};

const deleteProducto = (req, res) => {
  const index = productos.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: "Producto no encontrado" });
  productos.splice(index, 1);
  res.status(204).send();
};

module.exports = { getProductos, getProductoById, createProducto, updateProducto, deleteProducto };