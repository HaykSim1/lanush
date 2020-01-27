const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  text: { type: String, default: '' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Text', TextSchema);
