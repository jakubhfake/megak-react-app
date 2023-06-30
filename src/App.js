import React, {Component} from 'react';
import './App.css';

export const App = (props) => {
    const {name, lastName, friends} = props
    return (
        <>
            <h1>Hello, World!</h1>
            <p>Hello from {name} {lastName} do you have a friends:  {friends}</p>
        </>
    );
}

