import React from 'react';
import {App} from "./App";
import {render} from 'react-dom';

render(
    <>
        <App name="Testowa Osoba" lastName="Nazwisko"/>
        <App name="Lord Vader"/>
        <App name="Jakub"/>
    </>,
    document.getElementById('root'),
);



