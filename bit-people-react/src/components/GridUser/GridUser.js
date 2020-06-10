import React from 'react';
import PropTypes from 'prop-types';
import './GridUser.css';

const GridUser = (props) => {

    const hideEmail = (email) => {
        let splitEmail = email.split('');
        // splitEmail.splice(3, 6, '...');
        // return splitEmail;

        //const firstThreeLetters = email.slice(0)

        const i = email.indexOf("@") - 6;
        splitEmail.splice(3, i, '...');

        return splitEmail.join('');
    }

    const dobFormat = (date) => {
        const dob = new Date(date);
        let day;
        if (dob.getDate() < 10) day = '0' + dob.getDate();
        else day = dob.getDate();
        let month;
        if (dob.getMonth() < 10) month = '0' + dob.getMonth();
        else month = dob.getMonth();
        // const month = dob.getMonth();
        // const year = dob.getFullYear();
        return `${day}.${month}.${dob.getFullYear()}`;
    }

    return (
        <div className="GridUser">
            <div className="GridUser__Top">
                <img className="GridUser__Image" src={props.picture} alt="not available" />
                <span className="GridUser__Name">{props.name}</span>
            </div>
            <div className={props.gender === 'female' ? "GridUser__Data GridUser__Data--female" : "GridUser__Data"}>
                <p>Email: {hideEmail(props.email)}</p>
                <p>Date of birth: {dobFormat(props.dob)}</p>
            </div>
        </div>
    );
}

GridUser.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string
}

GridUser.defaultProps = {
    picture: "https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg",
    name: "John Doe",
    email: "/.-.com@/.-.com.com",
    dob: "unknown"
}



export { GridUser }; 