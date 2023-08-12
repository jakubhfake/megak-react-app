import React, {useState} from "react";

export const ControlledForm = props => {
    const [nick, setNick] = useState('')

    const putNick = e => {
      setNick(e.target.value);
    };

    const color = nick[0] === '@' ? 'green' : 'red';

    return <form method={"POST"}>
        <h1>Hello, {nick}.</h1>
        <input type={'text'}
               name={"nick"}
               value={nick} onChange={putNick}
               style={{backgroundColor: color}}
        />
        <p>You've entered {nick.length} characters nick.</p>
        <button type={"submit"}>Save</button>
    </form>
};