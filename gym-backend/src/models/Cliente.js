const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dpi: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    fechaNacimiento: { type: Date, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);
