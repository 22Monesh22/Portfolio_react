import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-image1.png";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.jpg";
import projImg5 from "../assets/img/project5.jpg";
import projImg6 from "../assets/img/project6.png";
import colorSharp2 from "../assets/img/color-sharp.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Full Stack",
      description: "Portfolio",
      imgUrl: projImg1,
      href: "https://monesh22.netlify.app/" // Update with actual link
    },
    {
      title: "Frontend Design",
      description: "Weather Application",
      imgUrl: projImg2,
      href: "https://brilliant-taiyaki-b83a27.netlify.app/" // Update with actual link
    },
    {
      title: "Full Stack & Django",
      description: "Bus Reservation System",
      imgUrl: projImg3,
      href: "https://github.com/22Monesh22/BusReservationSystem" // Update with actual link
    },
    {
      title: "Math Api",
      description: "Calculator",
      imgUrl: projImg4,
      href: "https://glowing-wisp-ee48ba.netlify.app/" // Update with actual link
    },
    {
      title: "Design Idea",
      description: "Instagram Clone",
      imgUrl: projImg5,
      href: "https://dynamic-babka-02236d.netlify.app/" // Update with actual link
    },
    {
      title: "Music App",
      description: "Song Recommendation",
      imgUrl: projImg6,
      href: "https://github.com/22Monesh22/song_recommendation" // Update with actual link
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I designed and developed a full-stack web platform, focusing on creating responsive front-end features and ensuring a visually appealing user interface. I prioritized seamless integration, optimized performance, and implemented strong security measures throughout the project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I built a full-stack web platform, designing and implementing front-end features with a focus on responsive, visually appealing interfaces. I ensured seamless integration, optimized performance, and incorporated robust security measures.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I built a full-stack web platform, designing and implementing front-end features with a focus on responsive, visually appealing interfaces. I ensured seamless integration, optimized performance, and incorporated robust security measures.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
