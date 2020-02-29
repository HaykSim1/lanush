const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
  name: { type: String, required: true },
  phone: String,
  address: String,
  email: String,
  disabled: { type: Boolean, default: false },
  serviceIds: [{ type: Schema.Types.ObjectId, ref: 'ServicePrice' }],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Worker', WorkerSchema);
