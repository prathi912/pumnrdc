// backend/models/Pricing.js
const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  equipmentId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  pros: [String],
  cons: [String],
  userType: { type: String, required: true }
});

const Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;
