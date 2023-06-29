import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";
import {render} from 'react-dom';


const name = prompt('Podaj imię');

let element;

if (name === '') {
    element = <strong>Brak imienia</strong>;
} else {
    element = <h1>{name}</h1>;
}

render(
    element,
    document.getElementById('root'),
);



