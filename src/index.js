import React from 'react';
import {App} from "./App";
import {render} from 'react-dom';

const name = 'Baltazar';
const friends = ['Jacek', 'Barbara', 'Smok Wawelski'];

render(
    <>
        <App
            name={name}
            lastName="Nazwisko"
            age={20}
            friends={friends.join(', ')}
        />
        <App name="Lord Vader"/>
        <App name="Jakub"/>
    </>,
    document.getElementById('root'),
);



