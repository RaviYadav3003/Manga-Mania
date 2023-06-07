import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import "./checkout.css"
export const Checkout = () => {
    const { state: { cart } } = useContext(DataContext)
    const originalValue = cart?.reduce((acc, curr) => {
        return { ...acc, total: acc.total += curr.originalPrice }
    }, { total: 0 })
    const totalvalue = cart?.reduce((acc, curr) => {
        return { ...acc, total: acc.total += curr.price }
    }, { total: 0 })
    return (
        <div>
            {<div className='checkout-container'>
                <div>
                    <h3>Price Detail</h3>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>price({cart.length} items) :</span> <span>{originalValue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Discount :</span> <span> -{originalValue.total - totalvalue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Total Amount :</span> <span> {totalvalue.total}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bolder" }}>Delivery Charge</span> <span>Free</span>
                </div>
                <div><p>You will save ₹ {originalValue.total - totalvalue.total} on this order </p></div>
                <div><button>Checkout</button></div>
            </div>}
        </div>
    )
}
