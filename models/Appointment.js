const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  Pacient: { type: String, required: true },
  Fecha: { type: Date, required: true },
  Hora: { type: String, required: true },
  Tipo: { type: String, required: true },
  Doctor: { type: String, required: true },
  Estado: { 
    type: String, 
    enum: ['Completada', 'Cancelada', 'No Asistio', 'ReAgendada', 'Agendada'], 
    required: true 
  },
  Precio: { type: Number, required: true },
  Comentarios: { type: String }, // New field for comments
  Canal: {
    type: String,
    enum: ['Facebook', 'Recomendacion', 'Instagram', 'Cliente Previo', 'Otro']
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);