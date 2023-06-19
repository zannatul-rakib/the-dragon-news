import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FcGoogle} from "react-icons/fc"
import {TfiGithub} from "react-icons/tfi"

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
                <ListGroup>
                    <ListGroup.Item as="li">Facebook</ListGroup.Item>
                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;