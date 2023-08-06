import React from "react";
import {UserListOneItem} from './UserListOneItem';

export const UsersList = props => (
    <ul>
        {
            props.users.map(userObj => <UserListOneItem user={userObj} key={userObj.username}/>)
        }
    </ul>
)