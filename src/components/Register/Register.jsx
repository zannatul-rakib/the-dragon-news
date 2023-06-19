import React from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../MyNavbar/MyNavbar';
import Footer from '../Footer/Footer';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';


const Register = () => {
    return (
        <div>
            <MyNavbar />
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h3 fw-bold mb-3 mx-1 mx-md-4 mt-2">Register</p>
                                        
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="name" type="text" id="form3Example1c" className="form-control" required />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                   
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="email" type="email" id="form3Example3c" className="form-control" required />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                   
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="password" type="password" id="form3Example4c" className="form-control" required />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                   
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input name="photoURL" type="text" id="form3Example4cd" className="form-control" />
                                                        <label className="form-label" for="form3Example4cd">Submit Your Photo URL</label>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-3">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c"  required/>
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                            </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                                 
                                            <div className="mb-5 text-center">
                                           
                                            <p className='text-center'>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
     <FaGoogle/>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <FaGithub/>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
     <FaFacebook/>
                                                </button>
                                                
                                                <p> Already Have an Account Please <Link to="/login">Login</Link> </p>
                                            </div>
                                            
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Register;