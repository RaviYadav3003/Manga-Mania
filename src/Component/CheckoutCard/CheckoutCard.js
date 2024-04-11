import React from 'react';
import { useData } from '../../Context/DataContext';
import "./checkoutCard.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CheckoutCard = () => {
    const { state: { cart }, originalValue, totalValue } = useData();
    const navigate = useNavigate()



    const handleCheckout = () => {
        if (cart.length === 0) {
            toast("Cart is Empty!")
        } else {
            navigate("/check-out")
        }
    }

    return (

        <div className='checkout-container-block'>
            <div className='checkout-div'>
                <h3>Price Detail</h3>
                <hr />
                <div className='checkout-price'>
                    <p>Price ({cart.length} items) :</p> <p>{originalValue.total}</p>
                </div>
                <div className='checkout-discount'>
                    <p>Discount :</p> <p> -{originalValue.total - totalValue.total}</p>
                </div>
                <hr />
                <div className="checkout-total">
                    <p >Total Amount :</p> <p> {totalValue.total}</p>
                </div>
                <div className='checkout-btn'>
                    <p >Delivery Charge:</p> <p style={{ color: "green" }}>Free</p>
                </div>
                <div className='checkout-discrib'><p>You will save ₹ {originalValue.total - totalValue.total} on this order </p></div>
                <div><button onClick={handleCheckout}>Checkout</button></div>
            </div>
        </div>

    );
};
