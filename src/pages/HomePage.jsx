import React, { useContext, useEffect } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <div id="home">
            <h1>Hi, I&apos;m Johnny!</h1>
            <NavLink to='/test-routing'>Navigate</NavLink>
        </div>
    );
}