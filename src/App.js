import React, {Component} from 'react';
import './App.css';

export const App = (props) => {
    const {person} = props
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Hello from {person.name} {person.lastName}.</p>
        </>
    );
}

