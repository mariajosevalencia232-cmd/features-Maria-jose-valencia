const { productos } = require('../models/productos.model');

// GET todos
const getProductos = (req, res) => {
  console.log("ENTRÓ A GET /api/productos");
  res.status(200).json(productos);
};

// GET por ID
const getProductoById = (req, res) => {
  const { id } = req.params;
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(200).json(producto);
};

// POST
const createProducto = (req, res) => {
  const { nombre, precio, stock } = req.body;

  // VALIDACIONES
  if (!nombre || precio === undefined || stock === undefined) {
    return res.status(400).json({
      error: "Nombre, precio y stock son obligatorios"
    });
  }

  if (precio < 0) {
    return res.status(400).json({
      error: "El precio no puede ser negativo"
    });
  }

  if (stock < 0) {
    return res.status(400).json({
      error: "El stock no puede ser negativo"
    });
  }

  const nuevoProducto = {
    id: `prod-${Date.now()}`,
    nombre,
    precio,
    stock
  };

  productos.push(nuevoProducto);

  res.status(201).json({
    mensaje: "Producto creado correctamente",
    producto: nuevoProducto
  });
};

//UPDATE
// PUT
const updateProducto = (req, res) => {
  const { id } = req.params;
  const datos = req.body;

  const producto = productos.find(p => p.id === id);

  // VALIDAR SI EXISTE
  if (!producto) {
    return res.status(404).json({
      error: "Producto no encontrado"
    });
  }

  // VALIDACIONES
  if (datos.precio !== undefined && datos.precio < 0) {
    return res.status(400).json({
      error: "El precio no puede ser negativo"
    });
  }

  if (datos.stock !== undefined && datos.stock < 0) {
    return res.status(400).json({
      error: "El stock no puede ser negativo"
    });
  }

  Object.assign(producto, datos);

  res.status(200).json({
    mensaje: "Producto actualizado correctamente",
    producto
  });
};


// DELETE
const deleteProducto = (req, res) => {
  const { id } = req.params;

  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const eliminado = productos.splice(index, 1);

  res.status(200).json({
    mensaje: "Producto eliminado",
    producto: eliminado[0]
  });
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};