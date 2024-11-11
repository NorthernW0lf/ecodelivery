import React, { useContext, useState, useEffect } from 'react';
import EcoLogistic from './EcoLogistic';
import BusinessComponent from './BusinessComponent';
import EcoLogisticsComponent from './EcoLogisticsComponent';
import OrderService from '../services/orderService';
import { IOrder } from '../models/IOrder';
import { Context } from '../index';

interface MainPageProps {
    users: { email: string }[];
    getUsers: () => void;
    userEmail: string;
    isAdmin: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ users, getUsers, userEmail, isAdmin }) => {
    const { store } = useContext(Context);
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loadingOrders, setLoadingOrders] = useState<boolean>(false);

    const fetchOrders = async () => {
        setLoadingOrders(true);
        try {
            const response = await OrderService.fetchAllOrders();
            setOrders(response.data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        } finally {
            setLoadingOrders(false);
        }
    };

    return (
        <div>

            {isAdmin ? (
                <>
                    <div>
                        <h2 className="text-center font-bold text-xl mt-4">ADMIN PAGE</h2>
                    <button
                        onClick={getUsers}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-4"
                    >
                        GET USERS
                    </button>
                    <button
                        onClick={fetchOrders}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition mt-4"
                    >
                        GET ORDERS
                    </button>
                    </div>

                    <div className="mt-6">
                        {users.length > 0 && (
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold">Users</h2>
                                {users.map(user => (
                                    <div key={user.email} className="p-2 bg-white rounded shadow-md">
                                        {user.email}
                                    </div>
                                ))}
                            </div>
                        )}

                        {loadingOrders ? (
                            <p>Loading orders...</p>
                        ) : (
                            <div className="mt-4 space-y-2">
                                {orders.map(order => (
                                    <div key={order.trackingNumber} className="p-4 bg-white rounded shadow-md">
                                        <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                                        <p><strong>Status:</strong> {order.status}</p>
                                        <p><strong>Estimated Delivery:</strong> {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                                        <p><strong>Transport Type:</strong> {order.transportType}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => store.logout()}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mt-4"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    {/* Non-admin view components */}
                    <h2 className="text-center font-bold text-xl mt-4">Welcome, {userEmail}</h2>
                    <EcoLogistic/>
                    <BusinessComponent/>
                    <EcoLogisticsComponent/>
                </>
            )}
        </div>
    );
};

export default MainPage;