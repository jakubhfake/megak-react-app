import React from 'react';
import {Participant} from "./Participant";
import {render} from 'react-dom';


render(
    <React.StrictMode>
        <Participant
            nameList={[
                {
                    name: 'Anna',
                    mail: 'xyz@xyz.xyz'
                },
                {
                    name: 'Jan',
                    mail: 'abc@abc.abc'
                }
            ]}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);



