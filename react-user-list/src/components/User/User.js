import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <li className="User">
            <img className="User__Thumbnail" src={props.thumb} alt="thumbnail" />
            <div className="User__Data">
                <p>name: {props.name}</p>
                <p>email: {props.email}</p>
                <p>date of birth: {props.dob}</p>
            </div>
        </li>
    );
}

export { User };