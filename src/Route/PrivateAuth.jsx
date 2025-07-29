import React, { use } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateAuth = ({children}) => {
    const location = useLocation()
    const { users, loading } = use(AuthContext);
    console.log(location);
    if(loading){
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <span className="loading loading-ring loading-2xl"></span>
            </div>
        )
    }
    if(!users){
        return <Navigate state={location.pathname} to="/signIn"></Navigate>

        }
        
        return children;
    
};

export default PrivateAuth;