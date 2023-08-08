import React from "react";

export const UserListOneItem = props => (
    <li key={props.user.username}>
        <img
            src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`} alt={`Photo of ${props.user.first_name}`}
        />
        {props.user.name} {props.user.last_name}     {props.user.username}
    </li>
);