import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";
import {render} from 'react-dom';


let counter = 0;

setInterval(() => {
    counter++;
    render(
        <>
            <h1>Licznik ma już {counter}.</h1>,
            <hr/>
            <h5>Witamy serdecznie!!!!</h5>
        </>,
        document.getElementById('root'),
);
}, 1000);

