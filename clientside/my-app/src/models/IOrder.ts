export interface IOrder {
    trackingNumber: string;
    status: string;
    estimatedDelivery: Date;
    transportType: string;
}