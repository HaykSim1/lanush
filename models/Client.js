const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  post: { type: Number, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  homeNumber: { type: String, required: true },
  additionalAddress: { type: String, required: false },
  note: { type: String, required: false },
  birthday: { type: String, required: true },
  total: { type: Number, required: true },
  serviceIds: [{ type: Schema.Types.ObjectId, ref: 'ServicePrice' }],
  worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
  scheduleId: { type: Schema.Types.ObjectId, ref: 'Schedule' },
  time: { type: Date, required: true },
  timeEnd: { type: Date, required: true },
  status: { type: Number, default: 0 },
  rRule: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);
