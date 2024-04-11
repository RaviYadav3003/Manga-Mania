import React from 'react';
import { useData } from '../../Context/DataContext';
import './cart.css';
import { CheckoutCard } from '../CheckoutCard/CheckoutCard';
import { ToastContainer } from 'react-toastify';

export default function Cart() {
  const { state, handleRemoveCart, handleAddToWishlist, removeFromWhislist, increaseQuantity, decreaseQuantity } = useData();

  return (
    <>

      <div className='cart'>
        {state.cart.length === 0 ? (
          <h1>Your cart is empty! , why don't you buy something</h1>
        ) : (
          <div className='cart-container'>
            {state.cart?.map((item) => {
              const { id, title, author, price, img, originalPrice, quantity } = item;
              const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
              return (
                <div className='cart-product' key={id}>
                  <div>
                    <img src={img} alt="productImage" />
                  </div>
                  <div className='cart-product-list'>
                    <div className='product-info'>
                      <div className='cart-heading'>
                        <h2>{title}</h2>
                      </div>
                      <div className='wishlist-block'>
                        {state.wishlist?.some((data) => data.id === id) ? (
                          <span className="wishlist-button-cart" onClick={() => removeFromWhislist(item)}>
                            <i className="fa fa-heart" style={{ color: "red" }}></i>
                          </span>
                        ) : (
                          <span className="wishlist-button-cart" onClick={() => handleAddToWishlist(item)}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className='detail-block'>

                      <div><span>{author}</span></div>
                      <div className='price-detail'>
                        <span className='price'>₹{price}</span>
                        <span className='originalprice'>₹{originalPrice}</span>
                        <span className='discount'>{discount}%OFF</span>
                      </div>
                      <div className='quantity-control'>
                        <button onClick={() => decreaseQuantity(id)} disabled={quantity <= 1} class="material-symbols-outlined">
                          remove
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => increaseQuantity(id)} class="material-symbols-outlined">
                          add
                        </button>
                      </div>
                      <div className="remove-button">
                        <button onClick={() => handleRemoveCart(item)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>)}
        <div className='checkout-container'>
          <CheckoutCard />
        </div>
        <ToastContainer />
      </div>

    </>
  );
}
