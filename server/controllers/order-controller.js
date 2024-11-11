// controllers/order-controller.js
const OrderModel = require('../models/order-model');

class OrderController {
    async getAllOrders(req, res, next) {
        try {
            const orders = await OrderModel.find();
            return res.json(orders);
        } catch (e) {
            next(e);
        }
    }

    async trackOrder(req, res, next) {
        try {
            const { trackingNumber } = req.params;
            const order = await OrderModel.findOne({ trackingNumber });
            if (!order) {
                return res.status(404).json({ message: 'Заказ не найден' });
            }
            return res.json(order);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new OrderController();
