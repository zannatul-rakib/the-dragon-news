import React from 'react';
import Marquee from "react-fast-marquee";
import MyNavbar from '../MyNavbar/MyNavbar';
import TopBar from '../TopBar/TopBar';

const Header = () => {
    return (
        <div className='my-3 mb-5 container'>
           <TopBar/>
            <div className='bg-light p-3 d-flex justify-start'>
                <button className="btn bg-danger text-white">Latest</button>
                <Marquee>
                    <small  > I can be a React component, multiple React components, or just some text.</small>
                </Marquee>
            </div>
            <MyNavbar/>
       </div>
    );
};

export default Header;