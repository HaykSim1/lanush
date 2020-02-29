const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: false },
  phone: { type: Number, required: false },
  email: { type: String, required: false },
  post: { type: Number },
  city: { type: String },
  address: { type: String, required: false },
  homeNumber: { type: String },
  additionalAddress: { type: String, required: false },
  note: { type: String, required: false },
  birthday: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);
