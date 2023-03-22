import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="primary-header">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Fake News Detection"
              description="This is a NLP model which can predict about the fake news. This model uses DecisionTreeClassofoer algorithm."
              ghLink="https://github.com/rohankarn35/fake_news_detection.git"

              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="AskMe AI Chat"
              description="The AI chat application developed by using flutter framework."
              ghLink="https://github.com/rohankarn35/AskMeAI.git"

            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="URL Prediction"
              description="This is my AI/ML project in which I have tried to make a ML model to test whether the given URL is safe or not."
              ghLink="https://github.com/rohankarn35/URLPredction.git"
            />
          </Col>
         
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
