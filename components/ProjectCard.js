import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};