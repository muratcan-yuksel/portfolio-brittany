import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="aboutText d-flex flex-column">
              <h4 className="aboutTitle">About Me</h4>
              <span className="aboutLine"></span>
              <p className="aboutPara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit corporis pariatur voluptas beatae expedita esse eos
                voluptatem placeat veniam cum, ipsam officia error debitis
                exercitationem amet sed, dolorem iste voluptatum.
              </p>{" "}
              <p className="aboutPara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit corporis pariatur voluptas beatae expedita esse eos
                voluptatem placeat veniam cum, ipsam officia error debitis
                exercitationem amet sed, dolorem iste voluptatum.
              </p>{" "}
              <p className="aboutPara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit corporis pariatur voluptas beatae expedita esse eos
                voluptatem placeat
              </p>
              <span className="aboutPara">
                Here are some of the technologies I currently use:
              </span>
              <Row>
                <Col>
                  <ul className="techList">
                    <li>bir</li>
                    <li>bir</li>
                    <li>bir</li>
                  </ul>{" "}
                </Col>
                <Col>
                  <ul className="techList">
                    <li>bir</li>
                    <li>bir</li>
                    <li>bir</li>
                  </ul>{" "}
                </Col>{" "}
              </Row>
            </div>
          </Col>
          {/* image col */}
          <Col className="d-flex align-items-center" xs={12} md={6}>
            <div className="pp"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
