import React from 'react';

const Project = ({ title, description, techStack, demoLink, repoLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Technologies used: {techStack}</p>
            <p><a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a></p>
            <p><a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
    );
};

export default Project;
