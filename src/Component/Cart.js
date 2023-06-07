import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import "./cart.css"
import { Checkout } from './Checkout'

export default function Cart() {
  const { state, handleRemoveCart, handleAddToWishlist } = useContext(DataContext)
  return (
    <div className='cart' >
      {state.cart.length === 0 && <h1>Your cart is empty! , why don't you buy something</h1>}
      <div className='cart-container'>
        {state.cart?.map((item) => {
          const { id, title, author, price, img, originalPrice, discount } = item
          return <>
            <div className='cart-conatiner'>
              <div>
                {<img src={img} alt="productImage" />}
              </div>
              <div className='wishlist-block'>
                {state.wishlist?.some((data) => data.id === id) ? (
                  <span className="wishlist-button"
                    onClick={() => handleAddToWishlist(item)}> <i class="fa fa-heart" style={{ color: "red" }}></i></span>
                ) : <span className="wishlist-button"
                  onClick={() => handleAddToWishlist(item)}><i className="fa fa-heart" aria-hidden="true"></i></span>}</div>
              <div className='detail-block'>
                <div className='cart-heading'>
                  <h3>{title}</h3>
                </div>
                <div ><span>{author}</span></div>
                <div className='price-detail'>
                  <span className='price'>₹{price}</span>
                  <span className='originalprice'>₹{originalPrice}</span>
                  <span className='discount'>{discount}%OFF</span>
                </div>
                <hr />
                <div className="remove-button" >
                  <button onClick={() => handleRemoveCart(item)}>Remove </button>
                </div>
              </div>
            </div>
            <div>
            </div>
          </>
        })}
      </div>
      <div className='checkout-container'>
        <Checkout />
      </div>
    </div>
  )
}
