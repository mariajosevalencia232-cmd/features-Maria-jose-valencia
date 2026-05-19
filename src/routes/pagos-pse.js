const express = require('express');
const router = express.Router();

const {
  procesarPagoPSE
} = require('../controllers/pagos-pse.controller');

// RUTA POST
router.post('/', procesarPagoPSE);

module.exports = router;