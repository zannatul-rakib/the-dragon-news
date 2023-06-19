import React from 'react';
import logo from "../../assets/logo.png";
import moment from 'moment';

const TopBar = () => {
    return (
        <div className='text-center my-5'>
            <img style={{ height: "45px" }} src={logo} alt="" />
            <p className='my-2 text-'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default TopBar;