const express = require('express');
const router = express.Router();

const {
  getOrders,
  createOrder
} = require('../controllers/orderController');

// GET PEDIDOS
router.get('/', getOrders);

// POST PEDIDO
router.post('/', createOrder);

module.exports = router;