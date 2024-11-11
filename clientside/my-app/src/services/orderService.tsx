// src/services/orderService.ts
import { AxiosResponse } from "axios";
import $api from '../http';
import { IOrder } from '../models/IOrder';

class OrderService {
    static fetchAllOrders(): Promise<AxiosResponse<IOrder[]>> {
        return $api.get<IOrder[]>('/orders');
    }

    static trackOrder(trackingNumber: string): Promise<AxiosResponse<IOrder>> {
        return $api.get<IOrder>(`/orders/${trackingNumber}`);
    }
}

export default OrderService;
