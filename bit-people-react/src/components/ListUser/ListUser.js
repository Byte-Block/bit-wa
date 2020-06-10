import React from 'react';
import PropTypes from 'prop-types';
import './ListUser.css';

import { MdEmail } from 'react-icons/md';
import { MdCake } from 'react-icons/md';

const ListUser = (props) => {

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
        <li className={props.gender === 'female' ? "ListUser ListUser--female" : "ListUser"} >
            <img className="ListUser__Thumbnail" src={props.thumb} alt="thumbnail" />
            <div className="ListUser__Data">
                <p>{props.name} {props.last}</p>
                <p className="ListUser__Email"><MdEmail />email: {hideEmail(props.email)}</p>
                <p className="ListUser__Birthday"><MdCake />{dobFormat(props.dob)}</p>
            </div>
        </li>
    );
}

ListUser.propTypes = {
    thumb: PropTypes.string,
    name: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string
}

ListUser.defaultProps = {
    thumb: "https://media.tenor.com/images/ddb141f7ee4051d09edbf06ad99b32c8/raw",
    name: "John",
    last: "Doe",
    email: "/.-.com@/.-.com.com",
    dob: "unknown"
}

export { ListUser };