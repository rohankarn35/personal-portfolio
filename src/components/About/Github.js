import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
        My <span className="primary-header">Github</span> Contribution
      </h1>
      <div className="gitContainer" data-aos="fade-up">
        <GitHubCalendar
          username="rohankarn35"
          color="purple"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
