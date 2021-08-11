import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/ProjectCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faPython,
    faJava,
    faAndroid,
} from '@fortawesome/free-brands-svg-icons';

const getIcon = language => {
    let languages = {
        'react': faReact,
        'js': faJsSquare,
        'html': faHtml5,
        'css': faCss3Alt,
        'python': faPython,
        'java': faJava,
        'kotlin': faAndroid
    }
    return languages[language.toLowerCase()]
}

export default function ProjectCard({ title, languages, description, project_link, source_link, img_src }) {

    return (
        <div className="project-card shadow">
            <div className="header">
                <img src={img_src} alt={title} />
                <div className="link-container">
                    {project_link !== undefined
                        ? 
                        <>
                            <a href={project_link} target="_blank" rel="noopener noreferrer">
                                Project
                            </a>
                            <br />
                        </>
                        : undefined
                    }
                    <a href={source_link} target="_blank" rel="noopener noreferrer">
                        Source Code
                    </a>
                </div>
            </div>
            <div className="body">
                <div className="content">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="footer">
                    {languages.map(language => <FontAwesomeIcon key={language} icon={getIcon(language)} size={'2x'} />)}
                </div>
            </div>
        </div>
    );

}

ProjectCard.propTypes = {
    title: PropTypes.string,
    languages: PropTypes.array,
    description: PropTypes.string,
    project_link: PropTypes.string,
    source_link: PropTypes.string,
    img_src: PropTypes.string
};