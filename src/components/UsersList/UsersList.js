import React, {useState} from "react";
import {UserListOneItem} from './UserListOneItem';

import './UsersList.css';
export const UsersList = props => {

    return <ul className={'UsersList'}>
        {
            [...props.users]
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObj => <UserListOneItem user={userObj} key={userObj.username}/>)
        }
    </ul>
};