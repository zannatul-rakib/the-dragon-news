import React from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import MyNavbar from '../MyNavbar/MyNavbar';

const Header = () => {
    return (
        <div className='my-3'>
            <div className='text-center'>
                <img style={{ height: "45px" }} src={logo} alt="" />
                <p className='my-2 text-'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div className='bg-light p-3 d-flex justify-start'>
                <button className="btn bg-danger text-white">Latest</button>
                <Marquee>
                    <small> I can be a React component, multiple React components, or just some text.</small>
                </Marquee>
            </div>
            <MyNavbar/>
       </div>
    );
};

export default Header;