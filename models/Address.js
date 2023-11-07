const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: { type: String, default: "6548625a18a7f4dc1e135c84", required: false }, // Removed required constraint
    addressLine1: { type: String, default: 'No Address Provided' }, // Default value set
    city: { type: String, default: 'No City Provided' }, // Default value set
    state: { type: String, default: 'No State Provided' }, // Default value set
    district: { type: String, default: 'No District Provided' }, // Default value set
    postalCode: { type: String, default: 'No Postal Code Provided' }, // Default value set
    default: { type: Boolean, default: false },
    country: { type: String, default: 'No Country Provided' }, // Default value set
    deliveryInstructions: { type: String, default: 'No Delivery Instructions' } // Default value set
});

module.exports = mongoose.model('Address', addressSchema);
