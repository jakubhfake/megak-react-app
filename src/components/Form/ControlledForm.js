import React, {useState} from "react";

export const ControlledForm = props => {
    const [nick, setNick] = useState('')
    return <input type={'text'} value={nick}/>;
};