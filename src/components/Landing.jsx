import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="hello d-flex justify-content-center">
              Hi, my name is
            </div>
          </Col>
          <Col xs={12}>
            <div className="title d-flex justify-content-center">
              Murat Can Yüksel
            </div>
          </Col>{" "}
          <Col xs={12}>
            <div className="title d-flex justify-content-center">
              I build things
            </div>
          </Col>
          <Col>
            <div className="para d-flex justify-content-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos laboriosam, laudantium iste necessitatibus earum
              voluptate illum harum voluptatibus adipisci doloribus dolores
              dolor placeat quo animi, pariatur, officiis dicta commodi quidem.
            </div>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <Button variant="outline-success  ">Success</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
