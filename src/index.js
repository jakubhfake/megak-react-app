import React from 'react';
import {Participant} from "./Participant";
import {createRoot} from 'react-dom/client';
import {participantData} from "./data/participant";
import {App} from "./App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);




