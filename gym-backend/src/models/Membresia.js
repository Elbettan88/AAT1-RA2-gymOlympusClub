const mongoose = require('mongoose');

const membresiaSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    tipo: { type: String, enum: ['Mensual', 'Trimestral', 'Anual'], required: true },
    precio: { type: Number, required: true },
    fechaInicio: { type: Date, default: Date.now },
    fechaFin: { type: Date, required: true },
    estado: { type: String, enum: ['Vigente', 'Vencida'], default: 'Vigente' }
}, { timestamps: true });

module.exports = mongoose.model('Membresia', membresiaSchema);
