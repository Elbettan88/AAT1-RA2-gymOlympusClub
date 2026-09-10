const Cliente = require('../models/Cliente');

exports.obtenerClientes = async (req, res) => {
    try { res.json(await Cliente.find()); } 
    catch (e) { res.status(500).json({ error: e.message }); }
};

exports.obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.crearCliente = async (req, res) => {
    try { res.status(201).json(await new Cliente(req.body).save()); } 
    catch (e) { res.status(400).json({ error: e.message }); }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!actualizado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json(actualizado);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.eliminarCliente = async (req, res) => {
    try {
        const eliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (e) { res.status(500).json({ error: e.message }); }
};
