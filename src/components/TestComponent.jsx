import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TransitionContext } from './TransitionScreen';

import '../styles/components/TestComponent.scss';

/**
 * Test Component to test Transition Screen Functionality
 */
export default function TestComponent( { shouldWait } ) {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => {
        if(shouldWait) {
            console.log('TestComponent:', 'Waiting to render')
            setTimeout(() => onLoad(), 5000);
        } else {
            onLoad();
        }
    }, []);

    return (
       <div id="test-container">
           <h1>Component loaded :)</h1>
       </div> 
    );
}

TestComponent.propTypes = {
    shouldWait: PropTypes.bool
}