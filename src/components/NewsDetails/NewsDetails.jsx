import React from 'react';
import TopBar from '../TopBar/TopBar';
import { Col, Row } from 'react-bootstrap';
import RightNav from '../RightNav/RightNav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const NewsDetails = () => {

    return (
        <div >
            <TopBar />
            <div className="container">
            <Row>
                <Col md={9} sm={12}>
                        
                        <Outlet/>
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