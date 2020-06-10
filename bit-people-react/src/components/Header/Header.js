import React from 'react';
import './Header.css';

import { FaThList } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';

const Header = ({ reload, viewMode, switchView }) => {
    return (
        <div className="Header">
            <h1 className="Header__Title">React Users</h1>
            <span onClick={reload}><FaRedo className="FaRedo" /></span>
            {viewMode ?
                <span onClick={switchView}><FaTh className="FaTh" /></span>
                : <span onClick={switchView}><FaThList className="FaThList" /></span>
            }

        </div>
    );
}

export { Header };