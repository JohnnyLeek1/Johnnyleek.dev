import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from './LoadingIcon';
import HomePage from '../pages/HomePage';
import WorkExperience from '../pages/WorkExperience';
import ProjectsPage from '../pages/ProjectsPage';
import TestComponent from './TestComponent';
import Page404 from './404';

import { generateRandomColor, getForegroundColor } from '../utils';
import { TRANSITION_ANIM_DURATION } from '../consts';


const TransitionContext = React.createContext({
    onLoad: () => { throw new Error("Cannot load a component without a TransitionScreen Parent."); }
})


export default function TransitionScreen({ toLoad }) {
    const [active, setActive] = useState(false);
    const [startLoad, setStartLoad] = useState(false);
    const [barColor] = useState(generateRandomColor());

    useEffect(() => {
        console.log('loading screen becoming active');
        console.log('loading', toLoad);
        // Wait until component is mounted before setting to active (for CSS transition)
        setActive(true);

        // Wait until screen is covered before rendering next component
        setTimeout(() => { setStartLoad(true) }, TRANSITION_ANIM_DURATION * 1000);

        return () => console.log('component gone');
    }, []);

    const getComponent = () => {
        switch(toLoad) {
            case 'Home':
                return <HomePage />
            case 'Work Experience':
                return <WorkExperience />
            case 'Projects':
                return <ProjectsPage />
            case 'Test':
                return <TestComponent shouldWait={true}/>
            case '404':
            default:
                return <Page404/>
        }
    }

    return (
        <>
            <div className={`transition-screen ${active ? 'active' : ''}`}>
                <div className='icon'>
                    <LoadingIcon width="100px" height="100px" fill={getForegroundColor(barColor)}/>
                </div>
                <div className="bar" style={ { backgroundColor: barColor } }></div>
                <div className="bar" style={ { backgroundColor: barColor } }></div>
                <div className="bar" style={ { backgroundColor: barColor } }></div>
                <div className="bar" style={ { backgroundColor: barColor } }></div>
                <div className="bar" style={ { backgroundColor: barColor } }></div>
            </div>
            <TransitionContext.Provider
                value={ { onLoad: () => setActive(false) } }
            >
                <div id="page-container">
                    {startLoad ? getComponent() : undefined}
                </div>
            </TransitionContext.Provider>
        </>
    );

}

TransitionScreen.propTypes = {
    toLoad: PropTypes.string
}

export { TransitionContext };