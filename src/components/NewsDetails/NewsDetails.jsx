import React from 'react';
import TopBar from '../TopBar/TopBar';
import { Col, Row } from 'react-bootstrap';
import RightNav from '../RightNav/RightNav';
import Footer from '../Footer/Footer';
import NewsDetailsCard from '../NewsDetailsCard/NewsDetailsCard';
import { useLoaderData } from 'react-router-dom';
import { MdOutlineDateRange } from 'react-icons/md';

const NewsDetails = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div >
            <TopBar />
            <div className="container">
            <Row>
                <Col md={9} sm={12}>
                        <h4 className='mb-3'>News  Details</h4>
                        <div>
                            <NewsDetailsCard news={news} />
                        </div>
                        <div className='mt-5'>
                            <h4>Editors Insight</h4>
                            <Row>
                                <Col md={4} sm={12}>
                                    <div>
                                        <div className='bg-secondary rounded mb-2' style={{width: "250px", height: "150px"}}></div>
                                        <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
                                        <p><small><MdOutlineDateRange/> Jan 4 2022</small></p>
                                    </div>
                                </Col>
                                <Col md={4} sm={12}>
                                    <div>
                                        <div className='bg-secondary rounded mb-2' style={{width: "250px", height: "150px"}}></div>
                                        <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
                                        <p><small><MdOutlineDateRange/> Jan 4 2022</small></p>
                                    </div>
                                </Col>
                                <Col md={4} sm={12}>
                                    <div>
                                        <div className='bg-secondary rounded mb-2' style={{width: "250px", height: "150px"}}></div>
                                        <h6>21 The Most Stylish Wedding Guest Dresses For Spring</h6>
                                        <p><small><MdOutlineDateRange/> Jan 4 2022</small></p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </Col>
                <Col md={3} sm={12}>
                    <RightNav/>
                </Col>
            </Row>
            </div>
            <Footer/>
        </div>
    );
};

export default NewsDetails;