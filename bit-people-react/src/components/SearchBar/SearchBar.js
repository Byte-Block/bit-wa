import React from 'react';
import './SearchBar.css';

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ randomUsers, setSearchResult }) => {

    const filterUsersBySearchValue = (event) => {
        const filteredUsers = randomUsers.filter(user => {
            if (user.name.first.toLowerCase().includes(event.target.value.toLowerCase())
                || user.name.last.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            } else return false;
        });
        setSearchResult(filteredUsers);
    }

    return (
        <div className="SearchBar">
            <FaSearch className="SearchBar__FaSearch" />
            <input className="SearchBar__Input" type="search" placeholder="Search users" onChange={filterUsersBySearchValue}></input>
        </div>
    );
}

export { SearchBar };
