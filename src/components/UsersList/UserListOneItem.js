import React from "react";

export const UserListOneItem = props => (
    <li key={props.user.username}>
        {props.user.name} {props.user.last_name}     {props.user.username}
    </li>
);