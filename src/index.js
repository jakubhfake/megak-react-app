import React from 'react';
import {Participant} from "./Participant";
import {render} from 'react-dom';
import {participantData} from "./data/participant";

render(
    <React.StrictMode>
        <Participant
            list={participantData}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);



