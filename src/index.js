import React from 'react';
import {App} from "./App";
import {render} from 'react-dom';


render(
    <React.StrictMode>
        <App
            person={{
                name: 'Baltazar',
                lastName: 'Gąbka',
                age: 123,
            }}
        />
        <App
            person={{
                name: 'Jasio',
                lastName: 'Fasola',
                age: 123,
            }}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);



