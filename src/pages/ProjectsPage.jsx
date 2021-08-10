import React, { useContext, useEffect } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';
import IconCheckBox from '../components/IconCheckBox';
import {
    faReact,
    faJsSquare
} from '@fortawesome/free-brands-svg-icons';

export default function ProjectsPage() {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => onLoad(), []);

    return (
        <div id="projects">
            <BackButton />
            <h1 className="title">Projects</h1>

            <IconCheckBox htmlFor="react" icon={faReact} label="React.JS" checkFunc={() => console.log('react checked')} checked={() => { return true }} />
            <IconCheckBox htmlFor="js" icon={faJsSquare} label="JavaScript" checkFunc={() => console.log('js checked')} checked={() => { return false }} />
        </div>
    );
}