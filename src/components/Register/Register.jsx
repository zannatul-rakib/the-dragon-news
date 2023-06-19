import React from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../MyNavbar/MyNavbar';
import Footer from '../Footer/Footer';

const Register = () => {
    return (
        <div>
        <MyNavbar/>
        <div className="form-box container">
            <h4>Register Your Account</h4>
            <Link to="/login">Login</Link>
        </div>
        <Footer/>
    </div>
    );
};

export default Register;