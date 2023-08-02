import React from "react";

export const PassTextInput = prompt => {

    const showPassword = () => {
        console.log('Pokaż hasło');
    };

    const hidePassword = () => {
        console.log('Hasło ukryte');
    };

    return <>
        <input type={'password'}/>
        <button onMouseDown={showPassword} onMouseUp={hidePassword}>🗨👁‍🗨</button>
        <button>🗨👁</button></>
}