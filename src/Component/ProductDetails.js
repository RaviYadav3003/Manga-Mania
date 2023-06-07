import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
import "./productDetail.css"
import { ToastContainer } from 'react-toastify'

export const ProductDetail = () => {
    const { state: { products, cart, wishlist }, handleAddToCart, handleAddToWishlist } = useContext(DataContext)
    const { productId } = useParams()

    const getProductDetail = (productId, products) => {
        return products?.find(({ id }) => id === productId)
    }
    const productDetail = getProductDetail(productId, products)
    console.log(productDetail);
    return (
        <>
            {productDetail && <div className='productDetail-conatiner'>
                <div>
                    {<img src={productDetail?.img} alt="productImage" />}
                </div>
                <div className='detail-block'>
                    <div className='title-heading'>
                        <h3>{productDetail?.title}</h3>
                    </div>
                    <div className='rating'>
                        <span>{productDetail?.rating}</span>
                    </div>
                    <div className='price-detail'>
                        <span className='price'>₹{productDetail?.price}</span>
                        <span className='originalprice'>₹{productDetail?.originalPrice}</span>
                        <span className='discount'>{productDetail?.discount}%OFF</span>
                    </div>
                    <hr />
                    <div className='all-detail'>
                        <div className='author'>
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
                    <div className="add-button" >
                        {cart?.some((data) => data.id === productDetail.id) ? (
                            <NavLink to="/cart">
                                <button style={{ backgroundColor: "white" }}>Go to Cart</button>
                            </NavLink>
                        ) : <button onClick={() => handleAddToCart(productDetail)}>
                            add to cart
                        </button>}
                    </div>
                    <div >
                        {wishlist?.some((data) => data.id === productDetail.id) ? (
                            <button className="wishlists-button" style={{ backgroundColor: "white" }} onClick={() => handleAddToWishlist(productDetail)}>Added to wishlist</button>
                        ) : <button className="wishlists-button" onClick={() => handleAddToWishlist(productDetail)}>Add to wishlist</button>}
                    </div>
                </div>
                <ToastContainer />
            </div>}
        </>
    )
}
