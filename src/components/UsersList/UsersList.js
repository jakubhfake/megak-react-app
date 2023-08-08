import React from "react";
import {UserListOneItem} from './UserListOneItem';

export const UsersList = props => (
    <ul>
        {
            props.users
                .sort((a, b) => a.username.localeCompare(b.username))
                .map(userObj => <UserListOneItem user={userObj} key={userObj.username}/>)
        }
    </ul>
)