import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import "./checkout.css";

export const Checkout = () => {
    const { state: { cart } } = useContext(DataContext);

    // Calculate total original price considering quantity
    const originalValue = cart.reduce((acc, curr) => {
        return { ...acc, total: acc.total + (curr.originalPrice * curr.quantity) };
    }, { total: 0 });

    // Calculate total price considering quantity
    const totalValue = cart.reduce((acc, curr) => {
        return { ...acc, total: acc.total + (curr.price * curr.quantity) };
    }, { total: 0 });

    return (
        <div>
            {<div className='checkout-container-block'>
                <div>
                    <h3>Price Detail</h3>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Price ({cart.length} items) :</span> <span>{originalValue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Discount :</span> <span> -{originalValue.total - totalValue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Total Amount :</span> <span> {totalValue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Delivery Charge:</span> <span>Free</span>
                </div>
                <div><p>You will save ₹ {originalValue.total - totalValue.total} on this order </p></div>
                <div><button>Checkout</button></div>
            </div>}
        </div>
    );
};
