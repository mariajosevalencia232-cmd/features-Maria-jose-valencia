const express = require('express');
const router = express.Router();
const { getPersonas, getPersonaById, createPersona, loginPersona, updatePersona, deletePersona } = require('../controllers/personasController');

router.get('/', getPersonas);
router.get('/:id', getPersonaById);
router.post('/', createPersona);
router.post('/login', loginPersona);
router.put('/:id', updatePersona);
router.delete('/:id', deletePersona);

module.exports = router;