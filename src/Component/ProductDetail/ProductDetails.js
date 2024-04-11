import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useData } from '../../Context/DataContext'
import "./productDetail.css"
import { ToastContainer } from 'react-toastify'

export const ProductDetail = () => {
    const { state: { products, cart, wishlist }, handleAddToCart, handleAddToWishlist, removeFromWhislist } = useData()
    const { productId } = useParams()

    const getProductDetail = (productId, products) => {
        return products?.find(({ id }) => id === productId)
    }
    const productDetail = getProductDetail(productId, products)

    const discount = Math.round(((productDetail.originalPrice - productDetail.price) / productDetail.originalPrice) * 100)

    return (
        <>
            {productDetail && <div className='productDetail-conatiner'>
                <div className='img-container'>
                    {<img src={productDetail?.img} alt="productImage" />}
                </div>
                <div className='detail-block'>
                    <div className='title-heading'>
                        <h3>{productDetail?.title}</h3>
                    </div>
                    <div className='rating'>
                        <span>{productDetail?.rating} </span><span class="material-symbols-outlined">
                            star
                        </span>
                    </div>
                    <div className='price-detail'>
                        <span className='price'>₹{productDetail?.price}</span>
                        <span className='originalprice'>₹{productDetail?.originalPrice}</span>
                        <span className='discount'>{discount}%OFF</span>
                    </div>
                    <div className='all-detail'>
                        <div className='author-detail'>
                            <span style={{ fontWeight: "bolder" }}>Author:</span>
                            <span>{productDetail?.author}</span>
                        </div>
                        <div className='category'>
                            <span style={{ fontWeight: "bolder" }}>category:</span>
                            <span>{productDetail?.category}</span>
                        </div>
                        <div className='language'>
                            <span style={{ fontWeight: "bolder" }}>Language:</span>
                            <span>English</span>
                        </div>
                        <div className='delivery'>
                            <span style={{ fontWeight: "bolder" }}>Delivery:</span>
                            <span>{productDetail.deliveryTime}</span>
                        </div>
                    </div>
                    <div className="add-button-detail" >
                        {cart?.some((data) => data.id === productDetail.id) ? (
                            <NavLink to="/cart">
                                <button style={{ backgroundColor: "white" }}>Go to Cart</button>
                            </NavLink>
                        ) : <button onClick={() => handleAddToCart(productDetail)}>
                            add to cart
                        </button>}
                    </div>
                    <div className='wishlist-button-detail'>
                        {wishlist?.some((data) => data.id === productDetail.id) ? (
                            <button className="wishlists-button" style={{ backgroundColor: "white" }} onClick={() => removeFromWhislist(productDetail)}>remove from wishlist</button>
                        ) : <button className="wishlists-button" onClick={() => handleAddToWishlist(productDetail)}>Add to wishlist</button>}
                    </div>
                </div>
                <ToastContainer />
            </div>}
        </>
    )
}
