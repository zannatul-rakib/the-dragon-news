import React from 'react';
import newsImage1 from "../../assets/1.png"
import newsImage2 from "../../assets/2.png"
import newsImage3 from "../../assets/3.png"
import { MdDateRange } from "react-icons/md";

const LeftNavNews = () => {
    return (
        <div className='px-2'>
            <div className='mt-3'>
                <img className='img-fluid mb-2' src={newsImage1} alt="" />
                <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                <div className="d-flex justify-content-between">
                    <p>Kids</p>
                    <p><small><MdDateRange/> Jan 4, 2022</small></p>
                </div>
            </div>
            <div className='mt-3'>
                <img className='img-fluid mb-2' src={newsImage2} alt="" />
                <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                <div className="d-flex justify-content-between">
                    <p>Family</p>
                    <p><small><MdDateRange/> Jan 4, 2022</small></p>
                </div>
            </div>
            <div className='mt-3'>
                <img className='img-fluid mb-2' src={newsImage3} alt="" />
                <h6>Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                <div className="d-flex justify-content-between">
                    <p>Sports</p>
                    <p><small><MdDateRange/> Jan 4, 2022</small></p>
                </div>
            </div>
        </div>
    );
};

export default LeftNavNews;