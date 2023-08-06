import React from "react";

export const UsersList = props => (
    <ul>
        {
            props.users.map(
                user => <li key={user.username}>
                    {user.name} {user.last_name}  {user.username}
            </li>
            )
        }
    </ul>
)