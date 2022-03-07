import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landingComp">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="hello d-flex justify-content-start">
              Hi, my name is
            </div>
          </Col>
          <Col xs={12}>
            <div className="title d-flex justify-content-start">
              Murat Can Yüksel
            </div>
          </Col>{" "}
          <Col xs={12}>
            <div className="title d-flex justify-content-start">
              I build things
            </div>
          </Col>
          <Col>
            <div className="para d-flex justify-content-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos laboriosam, laudantium iste necessitatibus earum
              voluptate illum harum voluptatibus adipisci doloribus dolores
              dolor placeat quo animi, pariatur, officiis dicta commodi quidem.
            </div>
          </Col>
          <Col xs={12} className="buttonCol d-flex justify-content-start">
            <Button variant="outline-success  ">Success</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
