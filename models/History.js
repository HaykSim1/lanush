const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  total: { type: Number, required: true },
  duration: { type: Number, required: true },
  feedBack: { type: Number, required: false },
  skinType: { type: Number, required: false },
  pigmentation: { type: Number, required: false },
  hairThickness: { type: Number, required: false },
  paymentInfo: { type: Number, required: false },
  LICount: { type: Number, required: false },
  category: { type: String, required: false },
  energy: { type: String, required: false },
  note: { type: String, required: true },
  emailSent: { type: Boolean, required: false },
  laserKunde: { type: Boolean, required: false },
  noteIsImportant: { type: Boolean, required: false },
  IPLKunde: { type: Boolean, required: false },
  importantInstructions: { type: String, required: false },
  serviceIds: [{ type: Schema.Types.ObjectId, ref: 'ServicePrice' }],
  worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  time: { type: Date, required: true },
  timeEnd: { type: Date, required: true },
  progress: { type: Number, default: 0 },
  status: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', HistorySchema);
