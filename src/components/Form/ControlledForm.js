import React, {useState} from "react";

export const ControlledForm = props => {
    const [nick, setNick] = useState('')

    const putNick = e => {
      setNick(e.target.value);
    };

    return <>
        <h1>Hello, {nick}.</h1>
        <input type={'text'} value={nick} onChange={putNick}
        />;
    </>
};