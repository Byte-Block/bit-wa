import React from 'react';
import './Stats.css';

const Stats = ({ users }) => {
    let male = 0;
    let female = 0;

    users.forEach(user => {
        if (user.gender === 'male') male++;
        else if (user.gender === 'female') female++;
    });

    return (
        <div className='Stats'>
            <span>Male: {male}</span>
            <span>Female: {female}</span>
        </div>
    );
}

export { Stats };