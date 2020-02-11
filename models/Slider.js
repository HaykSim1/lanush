const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
  image: { type: String, required: true },
  text: String,
  link: String,
  color: String,
  isSlide: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Slider', SliderSchema);
