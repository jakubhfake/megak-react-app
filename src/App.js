import React, {Component} from 'react';
import './App.css';

    const guests = ['Julia', 'Jan', 'Julian', 'Jakub', 'Joanna'];

export const App = (props) => {
    const {name} = props
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Hello from {name}.</p>
        </>
    );
}

