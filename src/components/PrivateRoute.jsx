import React from 'react'
import { Navigate, Outlet } from 'react-router';
import useAuthState from '../hooks/useAuthState';
import Spinner from './Spinner';

function PrivateRoute() {
    
    const { loggedIn, checkingStatus } = useAuthState();
    if (checkingStatus) {
        return <Spinner />
    }
  return (
    loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
  )
}

export default PrivateRoute