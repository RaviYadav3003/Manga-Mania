import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { DataContext } from '../../Context/DataContext';

export const RequiresAuth = ({ children }) => {
    const { isLoggedIn } = useContext(DataContext)
    const location = useLocation();
    return (
        isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
    )
}
