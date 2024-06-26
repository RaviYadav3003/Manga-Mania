import React, { useState, } from "react"
import "./product.css"
import { NavLink, useNavigate } from "react-router-dom"
import { Filter } from "../Filter/Filter"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import FilterModal from "../FilterModel/FilterModal"
import { useData } from "../../Context/DataContext"

export const Product = () => {
   const [isShowFilter, setIsShowFilter] = useState(false)
   const { state: { products, filters, cart, wishlist }, handleAddToCart, handleAddToWishlist, removeFromWhislist } = useData()

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
         <div className="product-header" >
            <div className="product-title" >
               <h3>Showing all products</h3>
               <div className="filter-icon" onClick={() => setIsShowFilter(true)} ><span class="material-symbols-outlined">
                  filter_alt
               </span></div>
            </div>
            <div className="product-listing">
               {renderData()?.map((product) => {
                  const { id, title, author, price, img, originalPrice, } = product
                  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
                  return <div key={id} className="product-container"  >
                     <img src={img} alt="Books will render" onClick={() => navigate(`/product/${id}`)} style={{ cursor: "pointer" }} />
                     <div>
                        {wishlist?.some((data) => data.id === id) ? (
                           <span className="wishlist-button"
                              onClick={() => removeFromWhislist(product)}> <i class="fa fa-heart" style={{ color: "red" }}></i></span>
                        ) : <span className="wishlist-button"
                           onClick={() => handleAddToWishlist(product)}><i className="fa fa-heart" aria-hidden="true"></i></span>}
                     </div>
                     <div className="content-side">
                        <div className="title-name">
                           <span><b>{title}</b></span>
                        </div>
                        <div className="author">
                           <span >{author} </span>
                        </div>
                        <div className="price-block">
                           <span>₹{price}</span>
                           <span>₹{originalPrice}</span>
                           <span>({discount}%OFF)</span>
                        </div>
                        <div className="add-button" >
                           {cart?.some((data) => data.id === id) ? (
                              <NavLink to="/cart">
                                 <button style={{ backgroundColor: "white", color: "black" }}>Go to Cart</button>
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
         {isShowFilter && <FilterModal setIsShowFilter={setIsShowFilter} />}
      </div>
      <ToastContainer />
   </>
}