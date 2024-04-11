import React from 'react'
import "./checkout.css"
import { AddressChange } from '../AddressChange/AddressChange';
import { OrderChange } from '../OrderChange/OrderChange';
import { OrderDetailsCard } from '../OrderDetailCrad/OrderDetailCard';

function Checkout() {
    return (
        <div className="checkout__container">
            <div className="checkout__summary__container">
                <AddressChange />
                <OrderChange />
            </div>

            <div className="checkout__details__container">
                <OrderDetailsCard />
            </div>
        </div>
    );
}

export default Checkout