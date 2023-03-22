import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Rohan Karn</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             <div class="img-controls">
             <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
              </div> 
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About/>
      <Projects/>
      <ResumeNew/>
      <ScrollToTop />
    </section>
  );
}

export default Home;
