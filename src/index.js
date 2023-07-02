import React from 'react';
import {Participant} from "./Participant";
import {render} from 'react-dom';

const data =[
    {
        name: 'Anna',
        mail: 'xyz@xyz.xyz'
    },
    {
        name: 'Jan',
        mail: 'abc@abc.abc'
    }
]

render(
    <React.StrictMode>
        <Participant
            list={data}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);



