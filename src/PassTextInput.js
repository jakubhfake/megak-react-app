import React, {useState} from "react";

export const PassTextInput = prompt => {
    const [isPreview, setPreview] = useState(false);
    const showPreview = () => {
        setPreview(true);
    };

    const hidePreview = () => {
        setPreview(false);
    };

    return <>
        <input type={isPreview ? 'text' : 'password'}/>
        <button onMouseDown={showPreview} onMouseUp={hidePreview}>
            {isPreview ? '👁‍🗨' : '👁' }
        </button>
        </>
}