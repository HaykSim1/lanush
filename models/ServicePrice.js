const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicePriceSchema = new Schema({
  categoryId: { type: Schema.Types.ObjectId, ref: 'ServiceCategory' },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  order: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ServicePrice', ServicePriceSchema);
