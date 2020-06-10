import React from 'react';
import './SearchBar.css';

import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {

    return (
        <div className="SearchBar">
            <FaSearch className="SearchBar__FaSearch" /><input className="SearchBar__Input" type="search" placeholder="Search users" onChange={props.getSearchFieldValue}></input>
        </div>
    );
}

export { SearchBar };
