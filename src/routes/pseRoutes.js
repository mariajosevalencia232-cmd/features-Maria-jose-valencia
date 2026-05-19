const express = require('express');
const router = express.Router();

const {
  createPsePayment,
  getPsePaymentByReference
} = require('../controllers/pseController');

// POST PAGO PSE
router.post('/', createPsePayment);

// GET PAGO POR REFERENCIA
router.get('/:ref', getPsePaymentByReference);

module.exports = router;