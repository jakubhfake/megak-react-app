import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";
import {render} from 'react-dom';

const name = prompt('Podaj imię');

render(
    name === ''
        ? <strong>Brak imienia</strong>
        : <h1>{name}</h1>,
    document.getElementById('root'),
);



