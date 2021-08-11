import React, { useContext } from 'react';
import { TransitionContext } from '../components/TransitionScreen';
import BackButton from '../components/BackButton';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function ResumePage() {
    const { onLoad } = useContext(TransitionContext);

    return (
        <div id="resume-page">
            <BackButton />
            <div id="resume-container" className="shadow">
                <Document
                    file="data/resume.pdf"
                    onLoadSuccess={() => onLoad()}
                    className="resume-pdf"
                >
                    <Page pageNumber={1} size="A4" scale={1.5} />
                </Document>
            </div>
            <a id="download-button" href="data/resume.pdf" download="Johnny Leek - Resume">Download Resume</a>
        </div>
    );
}