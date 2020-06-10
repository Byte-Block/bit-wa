import React from 'react';
import './Users.css';

import { List } from '../List/List';
import { Grid } from '../Grid/Grid';

const Users = (props) => {

    return (
        <>
            {
                props.listOrGridView ?
                    props.searchFieldValue === '' ?
                        <List users={props.users} />
                        : <List users={props.filteredUsers} />
                    : props.searchFieldValue === '' ?
                        <Grid users={props.users} />
                        : <Grid users={props.filteredUsers} />
            }
        </>
    );
}

export { Users };