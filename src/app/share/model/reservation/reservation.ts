export interface ReservationModel {
    quantity: number,
    travelDate: Date,
    locationId: number
}

export interface PaymentModel {
    id: number,
    totalAmount: number,
    status: boolean,
    paymentDate: Date
}


export interface LocationModel {
    id: number,
    location: string,
    price: number,
    status: boolean
}
export interface ReservationDetails  {
        id: number,
        quantity: number,
        travelDate: Date,
        payment:PaymentModel,
        location: LocationModel
}