import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/IconCheckBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconCheckBox({ htmlFor, icon, label, checkFunc, checked }) {
    return (
        <>
            <input type="checkbox" name={htmlFor} id={htmlFor} className="checkbox" onChange={() => checkFunc(htmlFor)} checked={checked()}/>
            <div className={`box-container shadow`}>
                <label htmlFor={htmlFor} className="label"><FontAwesomeIcon icon={icon} size={'3x'}/></label>
                <label htmlFor={htmlFor} className="label">{label}</label>
            </div>
        </>
    )
}

IconCheckBox.propTypes = {
    htmlFor: PropTypes.string,
    icon: PropTypes.any,
    label: PropTypes.string,
    checkFunc: PropTypes.func,
    checked: PropTypes.func
}