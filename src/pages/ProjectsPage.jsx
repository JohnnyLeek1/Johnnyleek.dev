/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';
import IconCheckBox from '../components/IconCheckBox';
import ProjectCard from '../components/ProjectCard';
import {
    faReact,
    faJsSquare,
    faHtml5,
    faCss3Alt,
    faPython,
    faJava,
    faAndroid,
} from '@fortawesome/free-brands-svg-icons';

export default function ProjectsPage() {
    const { onLoad } = useContext(TransitionContext);
    const [languages, setLanguages] = useState({ 'react': false, 'js': false, 'html': false, 'css': false, 'python': false, 'java': false, 'kotlin': false });
    const [showAll, setShowAll] = useState(true);
    const [projects, setProjects] = useState([]);

    // Fetch project data
    useEffect(() => {
        fetch('data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(e => console.error(e))
            .finally(() => onLoad());
    }, []);

    // Sets showAll to false if one or more boxes are checked, otherwise if every box is unchecked, sets showAll to true
    useEffect(() => setShowAll(Object.keys(languages).every(k => !languages[k])), [languages]);

    // Handle check / validating checkboxes
    const check = language => setLanguages({ ...languages, [language]: !languages[language]} );
    const isChecked = language => languages[language];

    useEffect(() => {
        document.querySelectorAll('*').forEach(el => {
            if (el.offsetWidth > document.documentElement.offsetWidth) {
                console.log('Found the worst element ever: ', el);
            }
        })
    }, [projects])

    // Filter projects to show only projects selected from the checkbox (or all projects if no selection is made)
    const filterProjects = () => {
        if(showAll) return projects;

        const selectedLanguages = Object.keys(languages).filter(language => languages[language]);
        return projects.filter(project => selectedLanguages.some(language => project.languages.includes(language)));
    }

    return (
        <div id="projects">
            <BackButton />

            <div id="language-checkboxes">
                <IconCheckBox htmlFor="react" icon={faReact} label="React.JS" checkFunc={() => check('react')} checked={() => isChecked('react')} />
                <IconCheckBox htmlFor="js" icon={faJsSquare} label="JavaScript" checkFunc={() => check('js')} checked={() => isChecked('js')} />
                <IconCheckBox htmlFor="html" icon={faHtml5} label="HTML" checkFunc={() => check('html')} checked={() => isChecked('html')} />
                <IconCheckBox htmlFor="css" icon={faCss3Alt} label="CSS / SCSS" checkFunc={() => check('css')} checked={() => isChecked('css')} />
                <IconCheckBox htmlFor="python" icon={faPython} label="Python" checkFunc={() => check('python')} checked={() => isChecked('python')} />
                <IconCheckBox htmlFor="java" icon={faJava} label="Java" checkFunc={() => check('java')} checked={() => isChecked('java')} />
                <IconCheckBox htmlFor="kotlin" icon={faAndroid} label="Kotlin" checkFunc={() => check('kotlin')} checked={() => isChecked('kotlin')} />
            </div>

            <div id="project-cards">
                {filterProjects().map(project => 
                    <ProjectCard
                        key={project.name}
                        title={project.name}
                        languages={project.languages}
                        description={project.description}
                        project_link={project.project_link}
                        source_link={project.source_link}
                        img_src={`/images/${project.image}`}
                    />)
                    // <h1 key={project.name}>poo</h1>)
                }

            </div>
        </div>
    );
}