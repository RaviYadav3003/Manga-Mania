import React, { useContext, } from "react"
import { DataContext } from "../index"
import "./product.css"
import { NavLink, useNavigate } from "react-router-dom"
import { Filter } from "./Filter"



export const Product = () => {
   const { state: { products, filters, cart, wishlist }, handleAddToCart, handleAddToWishlist } = useContext(DataContext)

   const navigate = useNavigate()
   const {
      searchValue,
      sort,
      selectedCategories,
      rating,
      price,
   } = filters;


   const renderData = () => {
      let filteredData = [...products]
      if (searchValue) {
         filteredData = filteredData.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
      }
      if (price) {
         filteredData = filteredData.filter((product) => product.price <= price)
      }
      if (sort) {
         filteredData = filteredData.sort((a, b) => sort === "LOW-TO-HIGH" ? a.price - b.price : b.price - a.price)
      }
      if (selectedCategories.length > 0) {
         filteredData = filteredData.filter((product) => selectedCategories.some((category) => category === product.category))
      }
      if (rating) {
         filteredData = filteredData.filter(product => product.rating >= rating)
      }

      return filteredData
   }


   return <>
      <div className="product">
         <div className="filter-container">
            <Filter />
         </div>
         <div className="product-listing">
            {renderData()?.map((product) => {
               const { id, title, author, price, img, originalPrice, discount } = product
               return <div key={id} className="product-container"  >
                  <img src={img} alt="Books will render" onClick={() => navigate(`/product/${id}`)} style={{ cursor: "pointer" }} />
                  <div>
                     {wishlist?.some((data) => data.id === id) ? (
                        <span className="wishlist-button"
                           onClick={() => handleAddToWishlist(product)}> <i class="fa fa-heart" style={{ color: "red" }}></i></span>
                     ) : <span className="wishlist-button"
                        onClick={() => handleAddToWishlist(product)}><i className="fa fa-heart" aria-hidden="true"></i></span>}
                  </div>
                  <div className="content-side">
                     <div className="title-name">
                        <span><b>{title}</b></span>
                     </div>
                     <div className="author">
                        <span style={{ fontSize: "13px" }}>{author} </span>
                     </div>
                     <div className="price-block">
                        <span>₹{price}</span>
                        <span>₹{originalPrice}</span>
                        <span>({discount}%OFF)</span>
                     </div>
                     <div className="add-button" >
                        {cart?.some((data) => data.id === id) ? (
                           <NavLink to="/cart">
                              <button style={{ backgroundColor: "white" }}>Go to Cart</button>
                           </NavLink>
                        ) : <button onClick={() => handleAddToCart(product)}>
                           add to cart
                        </button>}
                     </div>
                  </div>
               </div>
            })}
         </div>
      </div>
   </>
}