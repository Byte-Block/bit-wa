import React from 'react';
import './UserGrid.css';

import { UserCard } from '../UserCard/UserCard';


const UserGrid = (props) => {

    return (
        <div className="UserGrid">
            {props.users.map(user => (
                <UserCard key={user.login.uuid} picture={user.picture.large}
                    name={user.name.first}
                    email={user.email}
                    dob={user.dob.date}
                />
            ))}
        </div>
    );

}


export { UserGrid };
