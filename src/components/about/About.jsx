import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="aboutTitle">About me</div>
          </Col>
          <Col xs={12}>
            <div className="aboutLine"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
