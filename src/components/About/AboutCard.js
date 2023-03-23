import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="primary-header">Rohan Karn</span> from Nepal currently pursuing B.Tech in CSE from KIIT DEEMED UNIVERSITY, India.
            <br />
            <br />
            Here are the field in which I'm interested in
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Exploring new AI tools
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> AI/ML research
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Flutter Development
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Backend Development
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
