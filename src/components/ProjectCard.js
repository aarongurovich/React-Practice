import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} thumbnail`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
