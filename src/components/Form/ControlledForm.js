import React, {useState} from "react";

export const ControlledForm = props => {
    const [nick, setNick] = useState('')

    const putNick = e => {
      setNick(e.target.value);
    };

    const color = nick[0] === '@' ? 'green' : 'red';
    const sendForm = e => {
        e.preventDefault();
        console.log(nick);
    };

    return <form onSubmit={sendForm}>
        <h1>Hello, {nick}.</h1>
        <div>
            <textarea
                name={"nick"}
                value={nick} onChange={putNick}
            />
        </div>
        <div>
            <input type={'text'}
                   name={"nick"}
                   value={nick} onChange={putNick}
                   style={{backgroundColor: color}}
            />
            <p>You've entered {nick.length} characters nick.</p>
            <button type={"submit"}>Save</button>
        </div>

    </form>
};