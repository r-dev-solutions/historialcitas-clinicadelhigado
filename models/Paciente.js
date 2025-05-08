const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  diagnostico: { type: String },
  estado: { type: String, enum: ['Activo', 'Inactivo'], required: true },
  recomendaciones: { type: String },
  fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paciente', pacienteSchema);