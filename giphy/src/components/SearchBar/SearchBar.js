import React from 'react';
import './SearchBar.css';

import { fetchGifs } from '../fetchGifs/fetchGifs';

const SearchBar = ({ setResults, removal }) => {

    const onSearch = (event) => {
        if (event.keyCode === 13) {
            fetchGifs(event.target.value)
                .then(result => {
                    setResults(result.data);
                });
        }

    }

    return (
        <div className="SearchBar">
            <input className="SearchBar__Input" type="search" onKeyUp={onSearch}></input>
            <button onClick={removal}>Remove All</button>
        </div>
    );

}

export { SearchBar };