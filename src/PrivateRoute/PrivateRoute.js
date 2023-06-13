import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({isAuthorised}) => {
  return isAuthorised ? <Outlet/> : <Navigate to='/login'/>
} 

export default PrivateRoute
