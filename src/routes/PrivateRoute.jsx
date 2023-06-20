import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    
    if (loading) {
        return (
            <>
                 <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                    <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
                    <circle cx="170" cy="170" r="135" stroke="#404041"/>
                    <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
                    <circle cx="170" cy="170" r="85" stroke="#404041"/>
	            </svg>
            </>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default PrivateRoute;