import React, { createContext, useContext, useEffect, useReducer, useState, } from 'react'
import { dataReducer, initialState } from '../Reducers/DataReducer'
import { toast } from 'react-toastify';

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    getData();
    categoriesData();
  }, [])

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
    toast.success("Added to cart")
  };
  const handleAddToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    toast.success("added to wishlist")
  };

  const handleRemoveCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product })
    toast.warning("removed from cart")
  };

  const removeFromWhislist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
    toast.warning("remove from wishlist")
  }

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id })
  }
  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id })

  }

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: [] });
  };
  const originalValue = state.cart.reduce((acc, curr) => {
    return { ...acc, total: acc.total + (curr.originalPrice * curr.quantity) };
  }, { total: 0 });

  const totalValue = state.cart.reduce((acc, curr) => {
    return { ...acc, total: acc.total + (curr.price * curr.quantity) };
  }, { total: 0 });
  return (
    <div>
      <DataContext.Provider value={{ state, dispatch, handleAddToCart, handleAddToWishlist, handleRemoveCart, removeFromWhislist, setIsLoggedIn, isLoggedIn, decreaseQuantity, increaseQuantity, totalValue, originalValue, handleClearCart, setIsLoading, isLoading, addresses: state.addresses, selectedAddress: state.selectedAddress, }}>
        {children}
      </DataContext.Provider>

    </div>
  )
}

export const useData = () => useContext(DataContext);