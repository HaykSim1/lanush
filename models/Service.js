const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  alias: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: String,
  disabled:  { type: Boolean, default: false },
  points: [{
    title: String,
    description: String,
    order: { type: Number, default: 0 },
  }],
  prices: [{
    title: String,
    data: [{
      description: String,
      price: Number,
      order: { type: Number, default: 0 },
    }],
  }],
  order: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Service', ServiceSchema);
