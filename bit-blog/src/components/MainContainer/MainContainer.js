import React from "react";
import "./MainContainer.css";

import { Row, Col } from "react-bootstrap";

const MainContainer = (props) => {
  return (
    <Row>
      <Col xs={12}>{props.children}</Col>
    </Row>
  );
};

export { MainContainer };
