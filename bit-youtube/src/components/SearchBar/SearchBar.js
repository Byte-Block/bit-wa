import React from 'react';
import './SearchBar.css';

//import { Navbar, Icon } from 'react-materialize';
import { fetchYoutubeVideos } from '../fetch/fetch';

const SearchBar = ({ setSearchResults }) => {

    const onSearch = (event) => {

        fetchYoutubeVideos(event.target.value)
            .then(data =>
                setSearchResults(data.items)
            );

    }

    return (
        <nav className="SearchBar">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required placeholder="Search video here ..." onChange={onSearch} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav >
    );

};

export { SearchBar };

/*
    <Navbar
        className="SearchBar"
        alignLinks="right"
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
        search
        onChange={onSearch}
    >
    </Navbar>
*/





