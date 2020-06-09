import React from 'react';
import './Header.css';

import { FaThList } from "react-icons/fa";

const Header = () => {
    return (
        <div className="Header">
            <h1 className="Header__Title">React Users</h1>
            <FaThList className="FaThList"/>
        </div>
    );
}

export { Header };