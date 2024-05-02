import React from 'react'
import { useData } from '../../Context/DataContext'
import "./filter.css"


export const Filter = () => {
    const { state } = useData()

    const { dispatch, state: { filters: { sort,
        selectedCategories,
        rating,
        price
    } } } = useData()

    const handleRangeFilter = (e) => {
        dispatch({ type: "PRICE_BY_RANGE", payload: Number(e.target.value) })
    }

    const handleStarRating = (value) => {
        dispatch({ type: "STAR_RATING_FILTER", payload: value })
    }

    return (
        <>
            <div className='filter-container-show'>
                <div className="filter-header">
                    <h3>Filter</h3>
                    <span onClick={() => dispatch({ type: "CLEAR_FILTER_ALL" })}>clear</span>
                </div>
                <div className="filter-range">
                    <h3>price</h3>
                    <div className="filter-price-num font-large">
                        <span style={{ fontSize: price === 200 ? "x-large" : "" }}>200</span>
                        <span style={{ fontSize: price === 400 ? "x-large" : "" }}>400</span>
                        <span style={{ fontSize: price === 600 ? "x-large" : "" }}>600</span>
                        <span style={{ fontSize: price === 800 ? "x-large" : "" }}>800</span>
                    </div>
                    <div className="filter-range-input font-large">
                        <input type="range" min="200" max="800" onChange={handleRangeFilter} value={price} step={200} />
                    </div>
                </div>

                <div className="filter-category">
                    <h3>Category</h3>
                    <div className='category-list font-large'>
                        {state?.categories?.map(({ id, categoryName }) => {
                            return <div className='categorys'>
                                <label htmlFor={id}>
                                    <input type='checkbox' id={id} onChange={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: categoryName })} checked={selectedCategories.includes(categoryName)} />
                                    <span>{categoryName}</span>
                                </label>
                            </div>
                        })}
                    </div>
                </div>

                <div className="filter-rating ">
                    <h3>Rating</h3>
                    <div className='font-large'>
                        {[1, 2, 3, 4, 5].map((num) => {
                            return <div><label key={num}>
                                <input type="radio" name="rating" value={num} onChange={() => handleStarRating(num)} checked={rating === num} /> <span>{num} Star & above</span>
                            </label>
                            </div>
                        })}

                    </div>
                </div>

                <div className='filter-rating'>
                    <h3>Sort by</h3>
                    <div className='short-by font-large'>
                        <label htmlFor="price-low">
                            <input type="radio" id="price-low" name="short" onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: "LOW-TO-HIGH" }) }} checked={sort === "LOW-TO-HIGH"} /> <span>Price - Low to High</span>
                        </label>
                        <label htmlFor="price-high">
                            <input type="radio" id="price-high" name="short" onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: "HIGH-TO-LOW" }) }} checked={sort === "HIGH-TO-LOW"} /> <span>Price - High to Low</span>
                        </label>
                    </div>
                </div>
            </div>
        </>

    )
}
