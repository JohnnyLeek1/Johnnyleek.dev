import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from './LoadingIcon';
import TestComponent from './TestComponent';

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
        // Wait until component is mounted before setting to active (for CSS transition)
        setActive(true);

        // Wait until screen is covered before rendering next component
        setTimeout(() => { setStartLoad(true) }, TRANSITION_ANIM_DURATION * 1000);
    }, []);

    const getComponent = () => {
        switch(toLoad) {
            case 'Test':
                return <TestComponent shouldWait={true}/>
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
                {startLoad ? getComponent() : undefined}
            </TransitionContext.Provider>
        </>
    );

}

TransitionScreen.propTypes = {
    toLoad: PropTypes.string
}

export { TransitionContext };