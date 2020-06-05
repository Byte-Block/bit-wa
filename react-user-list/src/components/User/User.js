import React from 'react';
import PropTypes from 'prop-types';
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

User.propTypes = {
    thumb: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string
}

User.defaultProps = {
    thumb: "https://media.tenor.com/images/ddb141f7ee4051d09edbf06ad99b32c8/raw",
    name: "John Doe",
    email: "/.-.com@/.-.com.com",
    dob: "unknown"
}

export { User };