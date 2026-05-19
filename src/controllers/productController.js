let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 2500
  },
  {
    id: 2,
    name: 'Mouse',
    price: 120
  }
];

// GET TODOS
const getProducts = (req, res) => {
  res.json(products);
};

// GET POR ID
const getProductById = (req, res) => {

  const product = products.find(
    p => p.id == req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  res.json(product);
};

// CREAR PRODUCTO
const createProduct = (req, res) => {

  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: 'Nombre y precio son obligatorios'
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json({
    message: 'Producto creado correctamente',
    product: newProduct
  });

};

// ACTUALIZAR PRODUCTO
const updateProduct = (req, res) => {

  const product = products.find(
    p => p.id == req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  const { name, price } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;

  res.json({
    message: 'Producto actualizado',
    product
  });

};

// ELIMINAR PRODUCTO
const deleteProduct = (req, res) => {

  const product = products.find(
    p => p.id == req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  products = products.filter(
    p => p.id != req.params.id
  );

  res.json({
    message: 'Producto eliminado correctamente'
  });

};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};