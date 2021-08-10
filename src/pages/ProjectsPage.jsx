import React, { useContext, useEffect } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';

export default function ProjectsPage() {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => onLoad(), []);

    return (
        <div id="projects">
            <BackButton />
            <h1 className="title">Projects</h1>
        </div>
    );
}