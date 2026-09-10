const express = require('express');
const router = express.Router();
const mc = require('../controllers/membresiaController');

router.route('/').get(mc.obtenerMembresias).post(mc.crearMembresia);
router.route('/:id').get(mc.obtenerMembresiaPorId).put(mc.actualizarMembresia).delete(mc.eliminarMembresia);

module.exports = router;
