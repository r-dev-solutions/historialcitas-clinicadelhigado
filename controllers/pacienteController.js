const Paciente = require('../models/Paciente');

// Create new paciente
exports.createPaciente = async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.status(201).json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get paciente by ID
exports.getPacienteById = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Not found' });
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update paciente by ID
exports.updatePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!paciente) return res.status(404).json({ error: 'Not found' });
    res.json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete paciente by ID
exports.deletePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};