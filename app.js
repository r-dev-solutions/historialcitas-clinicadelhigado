require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointments');
const pacienteRoutes = require('./routes/pacientes'); // <-- Add this line
const connectDB = require('./config/db');

const app = express();

// Allow CORS for all origins
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

// Connect to MongoDB using the URI from .env
connectDB();

app.use('/appointments', appointmentRoutes);
app.use('/pacientes', pacienteRoutes); // <-- Add this line

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});