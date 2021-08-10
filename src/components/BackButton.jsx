import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/BackButton.scss';

export default function BackButton() {
    return (
        <NavLink to='/'>
            <div id="back-button">
                Go Back
            </div>
        </NavLink>
    );
}