import React from 'react';
import './UsersList.css';

import { User } from '../User/User.js';
import data from '../randomUsers/randomUsers';

const UsersList = () => {

    const randomUsers = data.results;

    return (
        <ul className="UsersList">
            {randomUsers.map(user => (
                <User key={user.login.uuid} thumb={user.picture.thumbnail}
                    name={user.name.first}
                    email={user.email}
                    dob={user.dob.date}
                />
            ))}
        </ul>
    );
}

export { UsersList };