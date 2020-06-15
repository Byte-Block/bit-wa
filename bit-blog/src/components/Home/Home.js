import React from 'react';
import './Home.css';

import { Row, Col } from 'react-bootstrap';
import { Posts } from '../Posts/Posts';

const Home = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h1 className="Home__Title my-1">Posts</h1>
                    <Posts />
                </Col>
            </Row>
        </>
    );
}

export { Home };