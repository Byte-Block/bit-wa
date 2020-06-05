import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = (props) => {
    return (
        <div className="UserCard">
            <div className="UserCard__Top">
                <img className="UserCard__Image" src={props.picture} alt="picture" />
                <span className="UserCard__Name">{props.name}</span>
            </div>
            <div className="UserCard__Data">
                <p>Email: {props.email}</p>
                <p>Date of birth: {props.dob}</p>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string
}

UserCard.defaultProps = {
    picture: "https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg",
    name: "John Doe",
    email: "/.-.com@/.-.com.com",
    dob: "unknown"
}



export { UserCard }; 