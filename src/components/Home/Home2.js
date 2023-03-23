import React from "react";
import { Container, Row, Col,Button} from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
//   AiOutlineMail,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"></span>
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                Self taught AI/ML engineer.
              </i>{" "}
              who loves to learn and do research in AI/ML field.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">technologies </i> and love to learn
              new things.
              <br />
              <br />I am more interested in building

                <i className="primary-header"> AI models and flutter application.</i>
             
              <br />
              <br />I always apply my experience in developing products with{" "}
              <i className="primary-header"> available AI tools </i> and flutter application.
              
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i>projects that I can add
              here.
            </p>
          </Col>
          
          <Col md={4} className="myAvtar">
            <Tilt>
              <div class="img">
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
              </div>
              
            </Tilt>
          </Col>
        </Row>
        <br/>
        <br/>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahuljha4171"
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
                  href="https://twitter.com/Rahuljha4171"
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
                  href="mailto:rahuljha4171@outlook.com"
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
                  href="https://www.linkedin.com/in/Rahuljha4171/"
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
                  href="https://www.instagram.com/dead.programmer/"
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
        </Row> */}
         <div  class="button-icon">
     <Button
            // variant="primary"
            href={"https://github.com/rohankarn35/rohankarn35/raw/main/pdf_20230302_105411_0000.pdf"}
         
          //   style={{
          // }}
          >
            &nbsp;
            {"Download CV"}
          </Button>
     </div>
      </Container>
    </Container>
  );
}
export default Home2;
