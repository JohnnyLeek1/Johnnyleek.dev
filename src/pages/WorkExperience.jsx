import React, { useContext, useEffect } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';

export default function WorkExperience() {
    const { onLoad } = useContext(TransitionContext);

    useEffect(() => onLoad(), []);

    return (
        <div id="work-experience">
            <BackButton />
            <div id="work-table">
                <h1 className="title">Work Experience</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Software Engineer Intern</th>
                            <th>Esri</th>
                            <th>May 2021 - August 2021</th>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <ul>
                                    <li>Served as a research and development software engineer on the ArcGIS Dashboard team --one of Esri’s most used products</li>
                                    <li>Designed and prototyped a proof-of-concept feature allowing customers to visualize temporal (time-aware) data on dashboards by interacting with an intuitive sliding time window</li>
                                    <li>Implemented a new 3D WebGL map widget into product, allowing users to visualize data in the third dimension, allowing users to interact with data in new ways</li>
                                    <li>Won 3rd place at company hackathon by creating an android app which utilized GIS to help people using active transportation take the safest walking/biking route to their destination</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Technical Lead</th>
                            <th>Central Michigan University</th>
                            <th>April 2020 - Present</th>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <ul>
                                    <li>Promoted to Technical Lead from previous position in April 2020; Supervised team of 9 web developers</li>
                                    <li>Mentored and conducted code reviews for entire team to ensure best practices and code quality</li>
                                    <li>Implemented the Agile workflow into team to increase flexibility, productivity, and accountability regarding development efforts</li>
                                    <li>Coordinated redesign of largset website, rewriting the frontend code using React.JS</li>
                                    <li>Increased efficiency of React development by creating a custom form API to handle form state and submittion</li>
                                    <li>Deployed code base to staging and production environments and created nginx configurations to ensure proper connectivity</li>
                                    <li>Designed and developed a feature allowing the automatic tracking and logging of website deployments, including the git hash of the deploy, who deployed it, and where they deployed it to</li>
                                    <li>Automated React deployments allowing the code to be compiled server-side instead of committing minified code to repository</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Full Stack Web Developer</th>
                            <th>Central Michigan University</th>
                            <th>November 2019 - April 2020</th>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <ul>
                                    <li>Implemented a &quot;Cache Busting&quot; system that ensures users receive the most recent files on their system, preventing UI bugs that had previously been a major issue</li>
                                    <li>Optimized cumbersome item logging system by designing and implementing a system which allowed users to categorize items by colour coded &quot;tags&quot;</li>
                                    <li>Worked 1:1 with the Assistant Director of Residence Life during the COVID-19 crisis to set up an automated emailing system to send out notifications regarding the status of on-campus events</li>
                                    <li>Worked through issue backlog in issue-tracking system to fix major bugs throughout websites</li>
                                    <li>Constructed a tutorial website to teach other new developers the basics of HTML, CSS, Django, Python, Javascript, and React.JS</li>
                                </ul>
                            </td>
                        </tr>              
                    </tbody>
                </table>
            </div>
        </div>
    );
}