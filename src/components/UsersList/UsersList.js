import React from "react";

export const UsersList = props =>{
    console.log(props.users);
    const lis =  props.users
        .map(
        user => <li key={user.username}>
            {user.name} {user.last_name}  {user.username}
        </li>
    );

    return <ul>
        {lis}
    </ul>;
};