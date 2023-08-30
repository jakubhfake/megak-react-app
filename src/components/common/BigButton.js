import React from "react";
import {Button} from "./Button/Button";
export const BigButton = props => (
    <Button padding={"15px"}>
        {props.children}
    </Button>
);