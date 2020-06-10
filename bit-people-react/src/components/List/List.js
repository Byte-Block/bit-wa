import React from 'react';
import './List.css';

import { ListUser } from '../ListUser/ListUser';

const List = (props) => {

    return (
        <ul className="List">
            {props.users.map(user => (
                <ListUser key={user.login.uuid} gender={user.gender}
                    thumb={user.picture.thumbnail}
                    name={user.name.first}
                    last={user.name.last}
                    email={user.email}
                    dob={user.dob.date}
                />
            ))}
        </ul>
    );

}

export { List };