import React, { useContext, useEffect } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';

export default function AboutPage() {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => onLoad(), []);

    return (
        <div id="about">
            <BackButton/>
            <div id="about-container">
                <h3 className="title">About Me</h3>
                <div id="pic_intro_container">
                    <div id="profile_pic">
                        <img src="/images/profile.jpg" alt="Picture of me" />
                    </div>
                    <div id="intro">
                        <p>
                            Hey! I&apos;m Johnny! I&apos;m a 3rd year college student attending Central Michigan University (🔥⬆️)!
                            I&apos;m <i>extremely</i> passionate about web design and development, with an increased interest in single page applications (like the one you&apos;re seeing right now).
                            I&apos;m currently dual-enrolled as both an undergraduate and graduate student, so I will have my M.S Computer Science degree in May of 2023!
                            I made this site to serve as my digital portfolio where I can keep track of all of the projects I have completed, as well as keep an up-to-date resume for employment opportunities.
                        </p>
                    </div>
                </div>
                <div id="hometown">
                    <h3 className="subtitle">Hometown</h3>
                    <p>
                        I was originally born in Nottingham, England, where I lived for 9 years! In 2009, my father was offered a job in America, and he took it!
                        In September 2010, we made the big move and I&apos;ve lived here ever since! All of my extended family still lives in England, and I&apos;ve only been back to visit once.
                        <br /><br />
                        I became an American citizen in April of 2021! This was such a humbling moment for me, and one of my most memorable life experiences to date.
                        I&apos;m so thankful for the opportunities that I have been given. Being able to experience living in two separate countries is a wonderful blessing.
                        I am a very open-minded individual when it comes to new experiences, and that makes me even more thankful for the life that I have been given.
                    </p>
                </div>
                <div id="programming">
                    <h3 className="subtitle">Programming</h3>
                    <p>
                        I wrote my first ever computer program when I was 9 years old. 
                        It was just after I moved to America. I was bored in our apartment one day, and so my dad decided to teach me how to write both &quot;Hello, World!&quot; and a calculator in C++.
                        Since that day, I have had a burning passion for computers and programming. I&apos;m always creating new things, and my desire has only grown stronger as I&apos;ve become older.
                        I&apos;m a logical thinker, and a problem solver. I love piecing together parts of a larger puzzle in order to create a result.
                        I think ahead to create scalable and reliable systems that save my team and I time and effort in the long term.
                        Programming is by far one of my biggest hobbies. Usually after a long school day, I&apos;ll go back to my room and start programming to unwind.
                        <br /><br />
                        I would certainly describe myself as an aspiring software engineer. It&apos;s been a goal of mine since I started programming to do it as a career.
                        I dream of working in a progressive workplace using cutting edge technology to make the world a better place with a diverse team of all backgrounds.
                    </p>
                </div>
                <div id="music">
                    <h3 className="subtitle">Music</h3>
                    <p>
                        I&apos;ve been playing the trombone since 6th grade and I absolutely <i>love</i> it.
                        I get involved in music wherever my schedule allows. I was a section leader of our trombone section in high school, and I am currently a &quot;Rank Captain&quot; (position of high leadership) in the Central Michigan University marching band.
                        Before my schedule got hectic with my graduate classes, I was the lead trombone for one of our university&apos;s jazz ensembles.
                        I also participated in our schools trombone choir!
                        I have an instagram account dedicated to my trombone playing! If you want to check if out it is <a href="https://www.instagram.com/johnnyleektrombone/" rel="noopener noreferrer" target="_blank">@johnnyleektrombone</a>
                    </p>
                </div>
            </div>
        </div>
    );
}