import React, {useState} from "react";

export const PassTextInput = prompt => {
    const [inputType, setInputType] = useState('password');

    const [icon, setIcon] = useState('👁‍🗨');
    const showPassword = () => {
        setInputType('text');
        setIcon('👁‍🗨');
    };

    const hidePassword = () => {
        setInputType('password');
        setIcon('👁')
    };

    return <>
        <input type={inputType}/>
        <button onMouseDown={showPassword} onMouseUp={hidePassword}>{icon}</button>
        </>
}