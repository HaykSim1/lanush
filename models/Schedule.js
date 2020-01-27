const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rRule: { type: String, required: false },
  notes: { type: String, required: false },
  phone: { type: String, required: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: Number, default: 1 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
