import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useData } from "../../Context/DataContext"
import { toast } from "react-toastify"

export const Navbar = () => {
    const { state: { cart, wishlist }, dispatch, isLoggedIn, setIsLoggedIn } = useData()

    const navigate = useNavigate()

    const handleProductSearch = (e) => {
        navigate("./product")
        dispatch({ type: "SERCH_PRODUCT", payload: e.target.value })
    }

    const logout = () => {
        setIsLoggedIn(false)
        toast("logout successfully")
    }
    return <React.Fragment>
        <div className="navbar-container" >
            <nav className="nav-name">
                <NavLink to="/"> Manga Mania</NavLink>
            </nav>
            <div className="nav-search">
                <i class="material-symbols-outlined">search</i>
                <input type="text" className="inputSearch" placeholder="Search" onChange={handleProductSearch} />
            </div>
            <div className="header-profile">
                <nav>
                    <NavLink to="/cart"><i class="material-symbols-outlined">shopping_cart</i><span>{isLoggedIn ? cart.length === 0 ? "" : cart.length : ""}</span></NavLink>
                    <NavLink to="/wishlist"> <i class="material-symbols-outlined">favorite</i><span>{isLoggedIn ? wishlist.length === 0 ? "" : wishlist.length : ""}</span></NavLink>
                    {isLoggedIn ? <NavLink> <span class="material-symbols-outlined" onClick={() => logout()}>logout</span> </NavLink> : <NavLink to="/login"> <span class="material-symbols-outlined">
                        login
                    </span></NavLink>}
                </nav>
            </div>
        </div>
    </React.Fragment>
}