import React, {useState} from "react";

import './LedLights.css';
export const LedLights = props => {
    const [color, setColor] = useState('white');

    const setRed = () => setColor('red');
    const setGreen = () => setColor('green');
    const setBlue = () => setColor('blue');

    return <>
        <div className={'LedLights'}>
            <div
                className={'LedLights__box'}
                style={{backgroundColor: color}}
            />
            <button onClick={setRed}>Red</button>
            <button onClick={setGreen}>Green</button>
            <button onClick={setBlue}>Blue</button>
        </div>
    </>;

}