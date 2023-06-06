import React, { useContext, useState, } from 'react'
import { DataContext } from '../Context/DataContext'
import "./filter.css"


export const Filter = () => {
    const { state } = useContext(DataContext)
    const [priceRange, setPriceRange] = useState(0)

    const { dispatch, state: { filters: { sort,
        selectedCategories,
        rating,
    } } } = useContext(DataContext)



    const handleRangeFilter = (e) => {
        setPriceRange(Number(e.target.value))
        dispatch({ type: "PRICE_BY_RANGE", payload: e.target.value })
    }

    const handleStarRating = (value) => {
        dispatch({ type: "STAR_RATING_FILTER", payload: value })
    }
    return (
        <>
            <div className='filter-container'>
                <div className="filter-header">
                    <h4>Filter</h4>
                    <span onClick={() => dispatch({ type: "CLEAR_FILTER_ALL" })}>clear</span>
                </div>
                <div className="filter-range">
                    <h4>price</h4>
                    <div className="filter-price-num">
                        <span style={{ fontSize: priceRange === 200 ? "large" : "" }}>200</span>
                        <span style={{ fontSize: priceRange === 400 ? "large" : "" }}>400</span>
                        <span style={{ fontSize: priceRange === 600 ? "large" : "" }}>600</span>
                        <span style={{ fontSize: priceRange === 800 ? "large" : "" }}>800</span>
                    </div>
                    <div className="filter-range-input">
                        <input type="range" min="200" max="800" onChange={handleRangeFilter} value={priceRange} step={200} />
                    </div>
                </div>

                <div className="filter-category">
                    <h4>Category</h4>
                    <div>
                        {state?.categories?.map(({ id, categoryName }) => {
                            return <div>
                                <label htmlFor={id}>
                                    <input type='checkbox' id={id} onChange={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: categoryName })} checked={selectedCategories.includes(categoryName)} />
                                    <span>{categoryName}</span>
                                </label>
                            </div>
                        })}
                    </div>

                    <div className="filter-rating">
                        <h4>Rating</h4>
                        <div>
                            {[1, 2, 3, 4, 5].map((num) => {
                                return <label key={num}>
                                    <input type="radio" name="rating" value={num} onChange={() => handleStarRating(num)} checked={rating === num} /> <span>{num} Star & above</span>
                                </label>
                            })}

                        </div>
                    </div>

                    <div>
                        <h4>Sort by</h4>
                        <div>
                            <label htmlFor="price-low">
                                <input type="radio" id="price-low" name="short" onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: "LOW-TO-HIGH" }) }} checked={sort === "LOW-TO-HIGH"} /> <span>Price - Low to High</span>
                            </label>
                            <label htmlFor="price-high">
                                <input type="radio" id="price-high" name="short" onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: "HIGH-TO-LOW" }) }} checked={sort === "HIGH-TO-LOW"} /> <span>Price - High to Low</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
