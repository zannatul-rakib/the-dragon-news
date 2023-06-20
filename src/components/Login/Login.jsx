import React, { useContext } from 'react';
import MyNavbar from '../MyNavbar/MyNavbar';
import Footer from '../Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login page location", location);
  const from = location?.state?.from?.pathname || "/category/0";
  
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then(result => {
        const currentUser = result.user;
        // console.log(currentUser);
        navigate(from, {replace: true});
      })
      .catch(error => console.log(error.message));
  }

    return (
        <div>
            <MyNavbar/>
            <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image" />
      </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
     <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
                </Button>
                <Form.Group className='mt-3'>
                <div className=" text-lg-start pt-2">
            <p className="small fw-bold mb-0">Don`t have an account? <Link to="/register"
                className="link-danger">Register</Link></p>
          </div>
                </Form.Group>
    </Form>
        {/* <form onSubmit={handleSignIn}>
          <div className="divider d-flex align-items-center my-4">
          <p className="fs-3 mb-0 fw-bold">Sign in</p>
          </div>

          <div className="form-outline mb-4">
            <input name="email" required type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input name="password" required type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
     <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don`t have an account? <Link to="/register"
                className="link-danger">Register</Link></p>
          </div>

        </form> */}
      </div>
    </div>
  </div>
 
            <Footer/>
        </div>
    );
};

export default Login;