import React, { createContext, useEffect, useReducer, useState, } from 'react'
import { dataReducer, initialState } from '../Reducers/DataReducer'
import { toast } from 'react-toastify';

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)
  const [isLoggedIn, setIsLoggedIn] = useState()
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


  return (
    <div>
      <DataContext.Provider value={{ state, dispatch, handleAddToCart, handleAddToWishlist, handleRemoveCart, removeFromWhislist, setIsLoggedIn, isLoggedIn, }}>
        {children}
      </DataContext.Provider>

    </div>
  )
}
