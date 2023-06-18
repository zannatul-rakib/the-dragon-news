import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/LeftNav/LeftNav';
import RightNav from '../components/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Container>
            <Header />
                <Row>
                    <Col md={3} sm={12}>
                        <LeftNav/>
                    </Col>
                    <Col md={6} sm={12}>
                        <Outlet/>
                    </Col>
                    <Col md={3} sm={12}>
                        <RightNav/>
                    </Col>
           </Row>
            <Footer/>
           </Container>
        </div>
    );
};

export default Main;