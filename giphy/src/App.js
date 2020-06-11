import React from 'react';
import { Header } from "./components/Header/Header";
import { SearchBar } from './components/SearchBar/SearchBar';
import { GalleryOfGifs } from './components/GalleryOfGifs/GalleryOfGifs';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResult: []
    }

    this.setSearchResults = this.setSearchResults.bind(this);
  }

  setSearchResults(searchResults) {
    this.setState({
      searchResult: searchResults
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setResults={this.setSearchResults} />
        <GalleryOfGifs gifs={this.state.searchResult} />
      </div>
    );
  }
}

export default App;
