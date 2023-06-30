import React from 'react';
import {App} from "./App";
import {render} from 'react-dom';

const person = {
    name: 'Baltazar',
    lastName: 'Gąbka',
    age: 123,
};

render(
    <>
        <App
            person={person}
        />
    </>,
    document.getElementById('root'),
);



