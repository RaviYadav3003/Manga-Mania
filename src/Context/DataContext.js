import React, { createContext, useEffect, useReducer, useState, } from 'react'
import { dataReducer, initialState } from '../Reducers/DataReducer'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [emailData, setEmailData] = useState()
  const [passwordData, setPasswordData] = useState()

  const navigate = useNavigate()
  const location = useLocation()
  const getData = async () => {
    try {
      const response = await fetch("/api/products")
      const { products } = await response.json()

      dispatch({ type: "INITIALIZE_PRODUCTS", payload: products })

    }
    catch (error) {
      console.log(error);
    }
  }
  const categoriesData = async () => {
    try {
      const res = await fetch("/api/categories")
      const { categories } = (await res.json())
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
    categoriesData();
  }, [])

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
    toast("Added to cart")
  };
  const handleAddToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    toast("added to wishlist")
  };

  const handleRemoveCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product })
    toast("removed from cart")
  };

  const removeFromWhislist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
    toast("remove from wishlist")
  }

  const handleTestLogin = () => {
    const emailDummy = "TestUser@123";
    const passDummy = "123456";
    setEmailData(emailDummy);
    setPasswordData(passDummy);
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div>
      <DataContext.Provider value={{ state, dispatch, handleAddToCart, handleAddToWishlist, handleRemoveCart, removeFromWhislist, isLoggedIn, setIsLoggedIn, handleTestLogin, emailData, passwordData }}>
        {children}
      </DataContext.Provider>

    </div>
  )
}
