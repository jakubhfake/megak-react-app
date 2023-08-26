import React from "react";

import './Dialog.css';

export const Dialog = props => (
    <div className={"Dialog__container"}>
        {props.children}
    </div>
);