const Membresia = require('../models/Membresia');

exports.obtenerMembresias = async (req, res) => {
    try { res.json(await Membresia.find().populate('clienteId')); } 
    catch (e) { res.status(500).json({ error: e.message }); }
};

exports.obtenerMembresiaPorId = async (req, res) => {
    try {
        const membresia = await Membresia.findById(req.params.id).populate('clienteId');
        if (!membresia) return res.status(404).json({ mensaje: 'Membresia no encontrada' });
        res.json(membresia);
    } catch (e) { res.status(500).json({ error: e.message }); }
};

exports.crearMembresia = async (req, res) => {
    try { res.status(201).json(await new Membresia(req.body).save()); } 
    catch (e) { res.status(400).json({ error: e.message }); }
};

exports.actualizarMembresia = async (req, res) => {
    try {
        const actualizada = await Membresia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!actualizada) return res.status(404).json({ mensaje: 'Membresia no encontrada' });
        res.json(actualizada);
    } catch (e) { res.status(400).json({ error: e.message }); }
};

exports.eliminarMembresia = async (req, res) => {
    try {
        const eliminada = await Membresia.findByIdAndDelete(req.params.id);
        if (!eliminada) return res.status(404).json({ mensaje: 'Membresia no encontrada' });
        res.json({ mensaje: 'Membresia eliminada correctamente' });
    } catch (e) { res.status(500).json({ error: e.message }); }
};
