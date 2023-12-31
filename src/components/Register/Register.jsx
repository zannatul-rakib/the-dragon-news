import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../MyNavbar/MyNavbar';
import Footer from '../Footer/Footer';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Form, Button } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    useTitle("Register")
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const check = form.check.value;
        const data = { name, email, password, photo, check }
        // console.log(data);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
            })
            .catch(error => console.log(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

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
                                             <div className="mb-5 border px-3 py-5">
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control name='name' type="text" placeholder="Enter Your Name" required/> 
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    
                                                    <Form.Label>PhotoURL</Form.Label>
                                                    
                                                    <Form.Control name='photo' type="text" placeholder="Enter photURL" />
                                                    
                                                </Form.Group>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    
                                                    <Form.Label>Email address</Form.Label>
                                                    
                                                    <Form.Control name='email' type="email" placeholder="Enter email"  require/>
                                                    
                                                </Form.Group>
                                                

                                                
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    
                                                    <Form.Label>Password</Form.Label>
                                                    
                                                    <Form.Control name='password' type="password" placeholder="Password"  require/>
                                                    
                                                </Form.Group>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    
                                                    <Form.Check  onClick={handleAccepted} name='check' type="checkbox" label={<span>Accept <Link to="/terms">Terms and Condition</Link></span>} require />
                                                    
                                                </Form.Group>
                                                <Button disabled={!accepted} variant="primary" type="submit">
                                                    Register
                                                </Button>
                                            </Form>    
                                            <div className="text-center">
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <FaGoogle />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <FaGithub />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <FaFacebook />
                                                </button>
                                                <p> Already Have an Account Please <Link to="/login">Login</Link> </p>
                                                </div>
                                            </div>
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