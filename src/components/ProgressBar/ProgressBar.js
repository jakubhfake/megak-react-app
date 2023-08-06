import React from 'react';
import './ProgressBar.css';

export const ProgressBar = props => {
    return <div
        className={'ProgressBar'}
        style={{
            width: `${props.percentage}%`
        }}
    >
        <p>{props.percentage}%</p>
    </div>;
}