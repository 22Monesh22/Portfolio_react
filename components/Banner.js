import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-bg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import BackgroundVideo from 'react-background-video-player';
import backgroundVideo from "../assets/img/videoplayback.webm";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Java Developer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="video-container">
        <BackgroundVideo src={backgroundVideo} loop muted />
        <img src={headerImg} alt="Header" className="header-image" />
      </div>
      <Container className="banner-content">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h3>{`Hi! I'm Monesh`} <span className="txt-rotate" data-period="1000" data-rotate='["Web Developer", "Java Developer", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h3>
                  <p>I'm a Full Stack Developer eager to create amazing websites and applications. I'm skilled in both front-end and back-end technologies, which means I can build the entire digital experience. Recent graduate with a degree in B.Tech Information Technology and a solid foundation in programming languages such as HTML, CSS, and JavaScript. I enjoy making user-friendly and efficient solutions and always stay updated on the latest trends in web development. I'm excited to collaborate and contribute to innovative projects that make a real impact.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
