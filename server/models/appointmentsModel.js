const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: Date,
  status: String, // E.g., "Scheduled", "Completed", "Canceled"
  // Other appointment-related fields
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
