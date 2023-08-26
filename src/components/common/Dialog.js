import React from "react";

import './Dialog.css';

export const Dialog = props => (
    <div className={"Dialog__container"}>
        <div className={"Dialog__title"}>
            Tytuł...
        </div>
        <div className={"Dalog__content"}>
            {props.children}
        </div>
    </div>
);