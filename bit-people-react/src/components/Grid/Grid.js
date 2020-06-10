import React from 'react';
import './Grid.css';

import { GridUser } from '../GridUser/GridUser';


const Grid = (props) => {

    return (
        <div className="Grid">
            {props.users.map(user => (
                <GridUser key={user.login.uuid} picture={user.picture.large}
                    name={user.name.first}
                    gender={user.gender}
                    email={user.email}
                    dob={user.dob.date}
                />
            ))}
        </div>
    );

}


export { Grid };
