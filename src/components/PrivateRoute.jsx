import React from 'react'
import { Navigate, Outlet } from 'react-router';
import useAuthState from '../hooks/useAuthState';

function PrivateRoute() {
    
    const { loggedIn, checkingStatus } = useAuthState();
    if (checkingStatus) {
        return <h1>Loading....</h1>
    }
  return (
    loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
  )
}

export default PrivateRoute