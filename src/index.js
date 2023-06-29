import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";
import {render} from 'react-dom';

const name = prompt('Podaj imię');

render(
    <div>
        {name === '' ? <strong>Brak imienia</strong> : <h1>{name}</h1>}
    </div>,
    document.getElementById('root'),
);



