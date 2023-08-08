import React from "react";

import './UserListOneItem.css';

export const UserListOneItem = props => (
    <li key={props.user.username} className={'UserListOneItem'}>
        <img
            className={'UserListOneItem__photo'}
            src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`} alt={`Photo of ${props.user.first_name}`}
        />
        <div className={'UserListOneItem__text'}>
            <p>{props.user.first_name} {props.user.last_name}</p>
            <p className={'UserListOneItem__username'}>{props.user.username}</p>
        </div>

    </li>
);