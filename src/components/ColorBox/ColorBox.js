import React, {useState} from "react";

import './ColorBox.css';

export const ColorBox = props => {
    const [backgroundColor, setBackgroundColor] = useState('#e28484');

    return <>
        <div className={'ColorBox__box'} style={{backgroundColor}}/>
        <div>
            <select
                name=""
                value={backgroundColor}
                onChange={e => setBackgroundColor(e.target.value)}
            >
                <option value={"#ff0000"}>Red</option>
                <option value={"#00ff00"}>Green</option>
                <option value={"#0000ff"}>Blue</option>
            </select>
        </div>
        <div>
            <input
                type="text"
                value={backgroundColor}
                onChange={e => setBackgroundColor(e.target.value)}
            />
        </div>

        <p>{backgroundColor}</p>

        
    </>;
};