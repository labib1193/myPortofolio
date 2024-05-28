import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa';

import heroimg from "../src/assets/Hero.png";
import icon1 from "../src/assets/coding.png";
import icon2 from "../src/assets/creativity.png";
import icon3 from "../src/assets/star.png";
import icon4 from "../src/assets/paint.png";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.png";
import project3 from "../src/assets/project3.png";
import project4 from "../src/assets/project4.png";
import project5 from "../src/assets/project5.png";
import project6 from "../src/assets/project6.png";
import quote from "../src/assets/quote.png";
import bill from "../src/assets/bill.png";

const App = () => {
  const klikPesan = () => {
    window.open("https://wa.me/6287854276010", "_blank");
  };
  const klikIg = () => {
    window.open("https://www.instagram.com/allmighttt__/?igsh=M25hZjB2YzBsN3dz", "_blank");
  };
  const klikTt = () => {
    window.open("https://www.tiktok.com/@mas.yhwach?_t=8mjEjbrvZsv&_r=1", "_blank");
  };
  const klikFb = () => {
    window.open("https://web.facebook.com/alfian.setiawan.33449?mibextid=ZbWKwL&_rdc=1&_rdr", "_blank");
  };
  const klikLi = () => {
    window.open("https://www.linkedin.com/in/bambang-santoso-3abb6030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  };

  return (
    <div>
      <div className="navbar">
        <h2 className="fw-semibold">Labibnurali.</h2>
        <div className="menu">
          <h5>About</h5>
          <h5>Project</h5>
        </div>
      </div>

      <div className="hero bg-transparent min-vh-100">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <h4 className="">Hello, I'm Labib Nur Ali</h4>
              <h1 className="">
                I'm a Frontend Developer and UI/UX Design Enthusiast
              </h1>
              <button onClick={klikPesan}>Contact Me</button>
            </Col>
            <Col md={6}>
              <img src={heroimg} alt="Hero" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about my-5">
        <Container>
          <Row>
            <Col lg={6} className="skills">
              <div className="card">
                <img src={icon1} alt="Icon1" />
                <h4>Frontend Developer</h4>
                <p>
                  Designing website interfaces, such as company profiles,
                  portfolios, e-commerce platforms, landing pages, blogs, news
                  sites, products, etc., is typically done using HTML, CSS, and
                  React.
                </p>
              </div>
              <div className="card">
                <img src={icon2} alt="Icon2" />
                <h4>Analytical Thinking</h4>
                <p>
                  I have strong problem-solving skills, capable of identifying
                  and resolving issues with a systematic and creative approach.
                  Utilizing critical and analytical thinking, I formulate
                  innovative solutions to overcome various challenges in my
                  projects.
                </p>
              </div>
              <div className="card">
                <img src={icon3} alt="Icon3" />
                <h4>Teamwork Excellence</h4>
                <p>
                  I have a strong achievement orientation and solid team
                  collaboration skills. I focus on reaching targets and outcomes
                  while working effectively with the team towards common goals.
                  My results-driven approach has led to successful projects and
                  meaningful contributions.
                </p>
              </div>
              <div className="card">
                <img src={icon4} alt="Icon4" />
                <h4>UI/UX Design</h4>
                <p>
                  I typically use Figma to create UI/UX designs for websites and
                  mobile applications, such as company profiles, portfolios,
                  e-commerce sites, landing pages, news platforms, online
                  courses, and more.
                </p>
              </div>
            </Col>
            <Col lg={6} className="desc">
              <p>My Skills</p>
              <h3 className="fw-semibold">Why Choose Me ?</h3>
              <p>
                I have good communication skills and extensive experience
                working both collaboratively and individually to create
                outstanding websites and UI/UX designs. I am enthusiastically
                committed to delivering high-quality designs that are creative
                and innovative, aligning with your project vision. Additionally,
                I am adept at facing challenges and finding effective solutions.
                With the dedication and expertise I bring, I am confident I can
                be a valuable partner in bringing your project to life."
              </p>
              <button>Download CV</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="project my-5">
        <Container>
          <Row>
            <Col className="text-center mt-5">
              <p>My Portfolio</p>
              <h1>Project Collection</h1>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center">
            <Col md={4}>
              <img src={project1} alt="Project 1" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src={project2} alt="Project 2" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src={project3} alt="Project 3" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src={project4} alt="Project 4" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src={project5} alt="Project 5" className="img-fluid" />
            </Col>
            <Col md={4}>
              <img src={project6} alt="Project 6" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="quotes my-5">
        <Container>
          <Row className="testjarak">
            <Col md={6} className="bill text-center">
              <img src={bill} alt="Bill Gates" className="img-fluid" />
            </Col>
            <Col md={6} className="petik text-center">
              <img src={quote} alt="Quote" className="img-fluid" />
              <h2>
                Learning to write programs stretches your mind, and helps you
                think better, creates a way of thinking about things that I
                think is helpful in all domains.
              </h2>
              <h3>Bill Gates</h3>
              <h4>CEO Microsoft</h4>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer mt-5 text-center">
        <Container>
          <Row className="baris">
            <Col md={4}>
              <h3>Labibnurali.</h3>
            </Col>
            <Col md={4} className="copy">
              <p className="text-center px-md-0 px-3">
                &copy; Copyright {new Date().getFullYear()} by{" "}
                <span className="fw-bold">Labibnurali</span>, All Rights Reserved
              </p>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div className="social-icons d-flex gap-3">
                <div className="icon-box" onClick={klikIg}>
                  <FaInstagram size={30} />
                </div>
                <div className="icon-box" onClick={klikTt}>
                  <FaTiktok size={30} />
                </div>
                <div className="icon-box" onClick={klikFb}>
                  <FaFacebook size={30} />
                </div>
                <div className="icon-box" onClick={klikLi}>
                  <FaLinkedin size={30} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;
