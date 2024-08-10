
import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Birthday Reminder',
    description: "Shows users how close friends' birthday is.",
    link: 'https://birthday-reminder-4nh.pages.dev/',
    image: './assets/images/birthday.PNG',
  },


  {
    title: 'Review Section',
    description: 'Can browse through several reviews from different people.',
    link: 'https://reviews-bvb.pages.dev/',
    image: './assets/images/reviews.PNG',
  },

  {
    title: 'Q & A Section',
    description: 'Can browse through different questions and answers',
    link: 'https://qandacomponent.pages.dev/',
    image: './assets/images/QandA.PNG',
  },

  {
    title: 'Tours Website',
    description: 'Can browse through several tour options.',
    link: 'https://tour-website.pages.dev/',
    image: './assets/images/tours.PNG',
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
