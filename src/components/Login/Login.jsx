import React from 'react';
import MyNavbar from '../MyNavbar/MyNavbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <MyNavbar/>
            <div className="form-box container">
                <h4>Login your Account</h4>
                <Link to="/register">Register</Link>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;