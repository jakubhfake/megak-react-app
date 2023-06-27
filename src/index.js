import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App";
import {App} from "./App";


let counter = 0;

setInterval(() => {
    counter++;
    console.log(`Hello, World! ${counter}`)
}, 1000);

