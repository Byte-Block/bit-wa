import React from 'react';
import './Users.css';

import { List } from '../List/List';
import { Grid } from '../Grid/Grid';
import { Loader } from '../Loader/Loader';

const Users = ({ listOrGridView, filteredUsers, users }) => {

    // return (
    //     <>
    //         {
    //             listOrGridView ?
    //                 filteredUsers.length ?
    //                     <List users={filteredUsers} />
    //                     : <List users={users} />
    //                 : filteredUsers.length ?
    //                     <Grid users={filteredUsers} />
    //                     : <Grid users={users} />
    //         }
    //     </>
    // );
    return (
        <>
            {filteredUsers.length ?
                listOrGridView ?
                    filteredUsers.length ?
                        <List users={filteredUsers} />
                        : <List users={users} />
                    : filteredUsers.length ?
                        <Grid users={filteredUsers} />
                        : <Grid users={users} />
                : users.length ?
                    "NOTHING FOUND" : <Loader />
            }
        </>
    );
}

export { Users };