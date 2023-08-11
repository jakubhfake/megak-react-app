import React, {useState} from "react";
import {UserListOneItem} from './UserListOneItem';

import './UsersList.css';
export const UsersList = props => {
    const [list, setList] = useState(props.users);
    const removeItem = (username) => {
        setList( list =>(
            list
                .filter(oneUser => oneUser.username !== username)
        ));
    };

    return (
        <ul className={'UsersList'}>
            {
                [...list]
                    .sort((a, b) => a.username.localeCompare(b.username))
                    .map(userObj => <UserListOneItem
                        user={userObj}
                        key={userObj.username}
                        onRemoveItem={removeItem}
                    />)
            }
        </ul>
    )
};