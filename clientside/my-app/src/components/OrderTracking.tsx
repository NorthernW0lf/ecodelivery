import React, { useState } from 'react';
import OrderService from '../services/orderService';
import styles from "../styles/CompanyInfo.module.css";
import { Link } from "react-router-dom";

interface IOrder {
    trackingNumber: string;
    status: string;
    estimatedDelivery: string;
    transportType: string;
}

const OrderTracking: React.FC = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [order, setOrder] = useState<IOrder | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleTrackOrder = async () => {
        try {
            const response = await OrderService.trackOrder(trackingNumber);
            const orderData = response.data;
            setOrder({
                ...orderData,
                estimatedDelivery: new Date(orderData.estimatedDelivery).toISOString(), // Преобразуем в строку
            });
            setErrorMessage(null);
        } catch (error) {
            setOrder(null);
            setErrorMessage('Order not found');
        }
    };


    return (
        <div>
            <nav className={styles.breadcrumb}>
                <Link to="/">Main Page</Link> → <span>Order Tracking</span>
            </nav>
            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
                <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter Tracking Number"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    onClick={handleTrackOrder}
                    className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition"
                >
                    Submit
                </button>

                {errorMessage && (
                    <p className="text-red-500 font-semibold">{errorMessage}</p>
                )}

                {order && (
                    <div className="space-y-4 text-left">
                        <div className="flex justify-between">
                            <span className="font-semibold">Tracking Number:</span>
                            <span>{order.trackingNumber}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Status:</span>
                            <span>{order.status}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Estimated Delivery:</span>
                            <span>{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Transport Type:</span>
                            <span>{order.transportType}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderTracking;
