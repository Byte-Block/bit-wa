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
    this.removeGivenGif = this.removeGivenGif.bind(this);
    this.removeAllGifs = this.removeAllGifs.bind(this);
  }

  setSearchResults(searchResult) {
    this.setState({ searchResult });
  }

  removeGivenGif(id) {
    const newState = this.state.searchResult.filter(gif => gif.id !== id);

    this.setState({
      searchResult: newState
    });
  }

  removeAllGifs() {
    this.setState({
      searchResult: []
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar setResults={this.setSearchResults} removal={this.removeAllGifs}/>
        <GalleryOfGifs gifs={this.state.searchResult} onDelete={this.removeGivenGif} />
      </div>
    );
  }
}

export default App;
