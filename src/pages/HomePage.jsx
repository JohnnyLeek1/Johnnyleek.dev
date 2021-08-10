import React, { useContext, useEffect, useState, useRef } from 'react';
import { TransitionContext } from '../components/TransitionScreen';

import NET from 'vanta/dist/vanta.net.min';

import { NavLink } from 'react-router-dom';

export default function HomePage() {
    const { onLoad } = useContext(TransitionContext);
    const backgroundRef = useRef(null);

    const [age, setAge] = useState(20);
    let ageIntervalID = 0;

    const [backgroundEffect, setBackgroundEffect] = useState(0);

    const getAge = () => {
        let newAge = (new Date() - new Date('August 8, 2001 00:00:00')) / (1000 * 60 * 60 * 24 * 365.25);
        setAge(newAge.toFixed(9));
    }

    useEffect(() => {
        ageIntervalID = setInterval(() => getAge(), 50);
        
        if(!backgroundEffect) {
            setBackgroundEffect(NET({
                el: backgroundRef.current,
                backgroundColor: '#23153C',
                color: '#00F5D4',
                points: 5,
                maxDistance: 21,
                spacing: 14
            }))
        }

        onLoad();
        return () => {
            clearInterval(ageIntervalID);
            if(backgroundEffect) backgroundEffect.destroy();
        }
    }, []);

    return (
        <div id="home" className="full-height" ref={backgroundRef}>
            <div id="gray-bg"></div>
            <div id="content-container">
                <div id="name-container" className="flex-center">
                    <h4>👋 Hi! I&apos;m</h4>
                    <h3>
                        <span className="bracket">{'< '}</span>
                            Johnny Leek
                        <span className="bracket">{' />'}</span>
                    </h3>
                    <h4>A passionate and distinguished software engineer.</h4>
                </div>
                <div id="facts-container">
                    <h3>I&apos;m a&nbsp;
                        <span className="age" tabIndex="0">{age.toString().substring(0, 2)}
                            <span className="age-decimal">.{age.toString().substring(3, 12)}</span>
                        </span>
                        &nbsp;year old software engineer currently living in Michigan, USA (though I&apos;m originally from Nottingham, United Kingdom)
                    </h3>
                    <h3>
                        I&apos;m currently focusing my efforts to become a better web developer, learning various web and cloud technologies, though I
                        have a great love for Java and Python programming, too!
                    </h3>
                    <h3>
                        I most commonly use:
                        <ul>
                            <li>React.JS</li>
                            <li>SCSS</li>
                            <li>Django</li>
                            <li>Firebase</li>
                            <li>Express.JS </li>
                            <li>Kotlin</li>
                        </ul>
                        but I am open to (and love) learning new technologies.
                    </h3>
                    <h3>
                        Take a look around!
                    </h3>
                </div>
                <div id="link-container">
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/work-experience'>Work Experience</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                    <NavLink to='/about'>About Me</NavLink>
                    <NavLink to='/contact'>Context</NavLink>
                </div>
            </div>
        </div>
    );
}