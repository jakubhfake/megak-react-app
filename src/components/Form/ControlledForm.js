import React, {useState} from "react";

export const ControlledForm = props => {
    const [nick, setNick] = useState('')

    const putNick = e => {
      setNick(e.target.value);
    };

    return <input type={'text'} value={nick} onChange={putNick}/>;
};