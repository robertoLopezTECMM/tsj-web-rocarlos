import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useAuth()
    console.log('private route: ', isAuthenticated)
    

    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }

    return children
}

export default PrivateRoute