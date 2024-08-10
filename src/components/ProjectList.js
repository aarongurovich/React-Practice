
import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Tours Website',
    description: 'Can browse through several tour options. Extra practice using useEffect and useState',
    link: 'https://tour-website.pages.dev/',
    image: './assets/images/tours.PNG',
  },
  {
    title: 'Random Movie Generator',
    description: 'Can Generate Random movie based on certain filters such as genre, ratings, date published, etc..',
    link: 'https://movie-generator-app.pages.dev/',
    image: './assets/images/randommovie.PNG',
  },
  {
    title: 'Reddit Clone',
    description: 'Can search for posts and explore different topics across various communities.',
    link: 'https://reddit-client-5io.pages.dev/',
    image: './assets/images/redditclone.PNG',
  },
  
 
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
