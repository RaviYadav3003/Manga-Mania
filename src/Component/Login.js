import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useLocation, useNavigate } from 'react-router-dom'
import "./login.css"

export const Login = () => {
  const { isLoggedIn, setIsLoggedIn, emailData, passwordData, handleTestLogin } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    navigate(location?.state?.from?.pathname)
  }
  return (
    <div>
      <div className='login-container'>
        <div className='input-side'>
          <label htmlFor='email'>Email</label>
          <input
            className="signInInput"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
            value={emailData}
          />
          <label htmlFor="password">Password</label>
          <input
            className="signInInput"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={passwordData}
            required
          />
        </div>
        <button onClick={handleLogin}>  {isLoggedIn ? "Logout" : "Login"}</button>
        <button onClick={() => handleTestLogin(!isLoggedIn)}>
          {!isLoggedIn ? "tester user login " : "Please Log out"}
        </button>
      </div>

    </div>
  )
}
