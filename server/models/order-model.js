const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    trackingNumber: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    estimatedDelivery: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transportType: { type: String, required: true }, // новое поле для типа транспорта
});

module.exports = model('Order', OrderSchema);
