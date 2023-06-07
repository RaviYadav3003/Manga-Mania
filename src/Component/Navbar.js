import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import { DataContext } from "../Context/DataContext"

export const Navbar = () => {
    const { state: { cart, wishlist }, dispatch } = useContext(DataContext)
    const navigate = useNavigate()

    const handleProductSearch = (e) => {
        navigate("./product")
        dispatch({ type: "SERCH_PRODUCT", payload: e.target.value })
    }
    return <React.Fragment>
        <div className="navbar-container" >
            <nav className="nav-name">
                <NavLink to="/"> Manga Mania</NavLink>
            </nav>
            <div className="nav-search">
                <i class="material-symbols-outlined">search</i>
                <input type="text" placeholder="Search" onChange={handleProductSearch} />
            </div>
            <div className="header-profile">
                <nav>
                    <NavLink to="/cart"><i class="material-symbols-outlined">shopping_cart</i><span>{cart.length === 0 ? "" : cart.length}</span></NavLink>
                    <NavLink to="/wishlist"> <i class="material-symbols-outlined">favorite</i><span>{wishlist.length === 0 ? "" : wishlist.length}</span></NavLink>
                    <NavLink to="/login"> Login</NavLink>
                </nav>
            </div>
        </div>
    </React.Fragment>
}