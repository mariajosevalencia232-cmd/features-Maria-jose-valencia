const express = require('express');
const router = express.Router();

const {
  getPedidos,
  createPedido,
  getPedidoById,
  updatePedido,
  deletePedido
} = require('../controllers/pedidos.controller');

// RUTAS
router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);
router.post('/', createPedido);



const { getPedidos, getPedidoById, createPedido, updatePedido, deletePedido } = require('../controllers/pedidosController');

router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.post('/', createPedido);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);

module.exports = router;