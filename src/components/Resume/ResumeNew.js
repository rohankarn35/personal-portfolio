import React, { useState, useEffect } from "react";
import { Container, Row,Col, Card } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ContactUs } from "./contact";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div class="contact">
      <Container>
      <h1 data-aos="fade-right">
              <span className="primary-header"><b>CONTACT</b></span> ME<br/><br/>
            </h1>
      <Row>
       <div class="contact-form">
       <Card className="project-card-view">
        <Card.Body>
        
          <Col md={12} className="home-about-social" style={{backgroundColor:"var(--clr-bg)"}}>
          
            <ContactUs/>
            <br></br>
            
            <i data-aos="fade-left">Feel free to connect with me on</i><br/><br/>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/rohankarn35"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rohankarn35"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:contact@rohankarn.com.np"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-karn-725847222"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rohankarn487/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          </Card.Body>
          </Card>
       </div>
        </Row>
        
        <br/>
        
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
