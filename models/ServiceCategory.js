const mongoose = require('mongoose');

const ServiceCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, default: 0 },
  color: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ServiceCategory', ServiceCategorySchema);
