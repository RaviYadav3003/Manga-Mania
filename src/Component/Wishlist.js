import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import "./wishlist.css"
import { NavLink } from 'react-router-dom'
import { ToastContainer, } from 'react-toastify'
export default function Wishlist() {
  const { state: { wishlist, cart }, handleAddToCart, removeFromWhislist } = useContext(DataContext)
  return (
    <>
      {wishlist.length === 0 && <h1>Your Wishlist is empty!</h1>}
      <div>{wishlist?.map((item) => {
        const { id, title, author, price, img, originalPrice, discount } = item
        return <>
          <div className='wishlist-conatiner'>
            <div>
              {<img src={img} alt="productImage" />}
            </div>
            <div className='detail-block'>
              <div className='wishlist-heading'>
                <h3>{title}</h3>
              </div>
              <div ><span>{author}</span></div>
              <div className='price-detail'>
                <span className='price'>₹{price}</span>
                <span className='originalprice'>₹{originalPrice}</span>
                <span className='discount'>{discount}%OFF</span>
              </div>
              <div className="add-button" >
                {cart?.some((data) => data.id === id) ? (
                  <NavLink to="/cart">
                    <button style={{ backgroundColor: "white" }}>Go to Cart</button>
                  </NavLink>
                ) : <button onClick={() => handleAddToCart(item)}>
                  add to cart
                </button>}
              </div>
              <div className="remove-button">
                <button onClick={() => removeFromWhislist(item)}>Remove</button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      })}</div>
    </>
  )
}
