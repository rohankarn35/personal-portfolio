import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  DiJava,
  DiNodejsSmall,
  DiSqllite,
  DiGit,
  DiHtml5,
  DiCss3,
  DiDart,
} from "react-icons/di";
import {
  SiFlutter,
  SiFirebase,
 
  SiPython,
  

} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>
    </Row>
  );
}

export default Techstack;