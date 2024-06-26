import React from 'react';

const Resume = () => {
    const resumeUrl = 'https://1drv.ms/w/s!ArYBa4PINDYQlD0qn_2XD7XFe3G8';

    const handleDownload = () => {
        // Logic for downloading the resume
        window.open(resumeUrl, '_blank');
    };

    return (
        <div>
            <h2>Resume</h2>
            <p>You can view my resume <a href={resumeUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
            <button onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;
