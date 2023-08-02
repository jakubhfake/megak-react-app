import React, {useState} from "react";

export const PassTextInput = prompt => {
    const [inputType, setInputType] = useState('password');
    const showPassword = () => {
        setInputType('text');
    };

    const hidePassword = () => {
        setInputType('password');
    };

    return <>
        <input type={inputType}/>
        <button onMouseDown={showPassword} onMouseUp={hidePassword}>
            {inputType === 'password' ? '👁' : '👁‍🗨'}
        </button>
        </>
}