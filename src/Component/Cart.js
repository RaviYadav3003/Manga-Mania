import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import "./cart.css"

export default function Cart() {
  const { state, handleRemoveCart } = useContext(DataContext)
  return (
    <div className='cart-container'>
      <div>
        {state.cart?.map((item) => {
          const { id, title, author, price, img, originalPrice, discount } = item
          return <>
            <div className='cart-conatiner'>
              <div>
                {<img src={img} alt="productImage" />}
              </div>
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
          </>
        })}
      </div>
    </div>
  )
}
