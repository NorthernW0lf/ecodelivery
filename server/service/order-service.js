const OrderModel = require('../models/order-model');
const ApiError = require('../exceptions/api-error');

class OrderService {
    async trackOrder(trackingNumber) {
        const order = await OrderModel.findOne({ trackingNumber }).populate('user');
        if (!order) {
            throw ApiError.BadRequest(`Order with tracking number ${trackingNumber} not found`);
        }
        return order;
    }

    // Дополнительные методы для создания и управления заказами можно добавить здесь
}

module.exports = new OrderService();
