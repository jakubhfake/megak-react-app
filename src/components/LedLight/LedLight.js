import React, {useState} from "react";

import './LedLight.css';
export const LedLight = props => {
    const [color, setColor] = useState('white');

    return <>
        <div className={'LedLights'}>
            <div
                className={'LedLights__box'}
                style={{backgroundColor: color}}
            />
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('blue')}>Blue</button>
        </div>
    </>;

}