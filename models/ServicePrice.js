const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicePriceSchema = new Schema({
  categoryId: { type: Schema.Types.ObjectId, ref: 'ServiceCategory' },
  subCategoryId: { type: Schema.Types.ObjectId, ref: 'ServiceSubCategory', default: null },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  sale: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ServicePrice', ServicePriceSchema);
