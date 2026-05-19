const express = require('express');
const router = express.Router();
const { crearPago, consultarPago, actualizarEstadoPago } = require('../controllers/pagosController');

router.post('/', crearPago);
router.get('/:ref', consultarPago);
router.put('/:ref/estado', actualizarEstadoPago);

module.exports = router;