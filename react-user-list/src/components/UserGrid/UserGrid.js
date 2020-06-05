import React from 'react';
import data from '../randomUsers/randomUsers';
import './UserGrid.css';

import { UserCard } from '../UserCard/UserCard';



const UserGrid = () => {
    return (
        <div className="UserGrid">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    );
}

export { UserGrid };