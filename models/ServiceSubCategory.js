const mongoose = require('mongoose');

const ServiceSubCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ServiceSubCategory', ServiceSubCategorySchema);
