import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo8.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import backgroundVideo from '../assets/img/f1.mp4';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-video-container">
        <video className="footer-video" autoPlay loop muted>
        
          Your browser does not support the video tag.
        </video>
      </div>
      <Container className="footer-content">
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/monesh22/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/monesh.kumar.7121"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/2___monesh___2/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
}
