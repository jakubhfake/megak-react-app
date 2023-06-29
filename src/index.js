import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";
import {render} from 'react-dom';


const name = prompt('Podaj imię');

if (name === '') {
    render(
        <strong>Brak imienia</strong>,
        document.getElementById('root'),
    );
} else {
    render(
        <h1>{name}</h1>,
    document.getElementById('root'),
    )
}



