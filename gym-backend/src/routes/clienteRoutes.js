const express = require('express');
const router = express.Router();
const cc = require('../controllers/clienteController');

router.route('/').get(cc.obtenerClientes).post(cc.crearCliente);
router.route('/:id').get(cc.obtenerClientePorId).put(cc.actualizarCliente).delete(cc.eliminarCliente);

module.exports = router;
