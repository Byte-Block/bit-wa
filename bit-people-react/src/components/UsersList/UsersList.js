import React from 'react';
import './UsersList.css';

import { User } from '../User/User';

const UsersList = (props) => {

    return (
        <ul className="UsersList">
            {props.users.map(user => (
                <User key={user.login.uuid} thumb={user.picture.thumbnail}
                    name={user.name.first}
                    last={user.name.last}
                    email={user.email}
                    dob={user.dob.date}
                />
            ))}
        </ul>
    );

}

export { UsersList };