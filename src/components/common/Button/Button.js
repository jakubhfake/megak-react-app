import React from "react";

import './Button.css'
export const Button = props => (
    <button className={"Custom-Btn"} style={{padding: `${props.padding}`}}>
        {props.children}
    </button>
);