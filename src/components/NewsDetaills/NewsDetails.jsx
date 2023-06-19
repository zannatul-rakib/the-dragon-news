import React from 'react';
import TopBar from '../TopBar/TopBar';
import { Col, Row } from 'react-bootstrap';
import RightNav from '../RightNav/RightNav';

const NewsDetails = () => {
    return (
        <div className='container'>
            <TopBar />
            <Row>
                <Col md={9} sm={12}>
                    <h2>News  Details Here</h2>
                </Col>
                <Col md={3} sm={12}>
                    <RightNav/>
                </Col>
            </Row>
        </div>
    );
};

export default NewsDetails;