import React from 'react';
import './SearchBar.css';

import { Navbar, Icon } from 'react-materialize';
import { fetchYoutubeVideo } from '../fetchYoutubeVideo/fetchYoutubeVideo';

const SearchBar = ({ setSearchResults }) => {

    const onSearch = (event) => {

        fetchYoutubeVideo(event.target.value)
            .then(data => {
                setSearchResults(data.items);
                console.log(data.items);
            });

    }

    return (<Navbar
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
    </Navbar>);

};

export { SearchBar };







