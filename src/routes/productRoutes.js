const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// OBTENER TODOS LOS PRODUCTOS
router.get('/', getProducts);

// OBTENER PRODUCTO POR ID
router.get('/:id', getProductById);

// CREAR PRODUCTO
router.post('/', createProduct);

// ACTUALIZAR PRODUCTO
router.put('/:id', updateProduct);

// ELIMINAR PRODUCTO
router.delete('/:id', deleteProduct);

module.exports = router;