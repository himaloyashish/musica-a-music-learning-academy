import React from 'react';
import useAuth from '../../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading , user} = useAuth()
    const location =  useLocation()


    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;