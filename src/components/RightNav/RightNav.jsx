import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import Image1 from "../../assets/qZone1.png";
import Image2 from "../../assets/qZone2.png";
import Image3 from "../../assets/qZone3.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const RightNav = () => {
    return (
        <div>
            <div className='mb-4'>
                <h4 className='mb-2'>Login With</h4>
                <Button variant="outline-primary" className='mb-2'><FcGoogle/> Log In With Google</Button> <br />
                <Button variant="outline-secondary"><TfiGithub /> Log In With Github</Button>
            </div>
            <div>
                <h5>Find Us On</h5>
                <ListGroup >
                    <ListGroup.Item as="li"><BsFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item as="li"><ImLinkedin/> LinkedIn</ListGroup.Item>
                    <ListGroup.Item as="li"><AiFillTwitterCircle/> Twitter</ListGroup.Item>
                    <ListGroup.Item as="li"><BsInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-light mt-4 text-center px-2 py-3'>
                <h5>Q-zone</h5>
                <img className='img-fluid' src={Image1} alt="" />
                <img className='img-fluid' src={Image2} alt="" />
                <img className='img-fluid' src={Image3} alt="" />
            </div>
            <div className="bg-img">
                <div className='text-white px-3'>
                    <h3>create an Amazing Newspaper</h3>
                    <p><small className='text-light'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                    <button className="btn btn-danger">Learn More</button>
               </div>
            </div>
        </div>
    );
};

export default RightNav;