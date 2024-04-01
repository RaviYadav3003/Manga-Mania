import React, { useContext } from 'react'
import "./home.css"
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
export default function Home() {
    const { state, dispatch } = useContext(DataContext)
    const navigate = useNavigate();
    const handleCategoryClick = (categoryName) => {
        navigate("/product")
        dispatch({ type: "CLEAR_FILTER_ALL" });
        dispatch({ type: "FILTER_BY_CATEGORIES", payload: categoryName });
    }
    return (
        <div>

            <div className=' landing-container'>
                <div className='cover-image'>
                    <img src="https://i.ibb.co/NWxrqh8/anime-website-page.webp" alt="anime-website-page" />
                </div>
                <div className='text-area'>
                    <h1>welcome to Manga Mania</h1>
                    <p> Explore the endless world of</p><p> anime and manga with us!</p>
                    <Link to="/product"><button>Shop Now</button></Link>
                </div>
                <div className='category-container'>
                    <div className='container ' >
                        <div className='category-header' >
                            <h1> Manga Book categories</h1>
                            <p>There are many categories of book's are available in manga maina, choose your favorite one now</p>
                        </div>
                        <div className='category-box'>
                            {state?.categories?.map(({ categoryName, description }) => {
                                return <div className='box' onClick={() => handleCategoryClick(categoryName)}>
                                    <h2>{categoryName}</h2>
                                    <p>{description}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='icon'>
                        <h2> &#169; Manga Mania </h2>
                        <a href='https://github.com/RaviYadav3003' target='_blank'><i class="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ravi-yadav-294862252/" target='_blank'><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
