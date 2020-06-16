import React from "react";
import "./Home.css";

import { Row, Col } from "react-bootstrap";
import { Posts } from "../Posts/Posts";

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Posts />
        </Col>
      </Row>
    </>
  );
};

export { Home };

// { span: 10, offset: 1 }
