import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


import { SearchBar } from './components/SearchBar/SearchBar';
import { Main } from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }

  }

  setSearchResults = (searchResults) => {
    this.setState({
      searchResults
    });
  }

  render() {
    console.log(this.state.searchResults);
    return (
      <div className="App">
        <SearchBar setSearchResults={this.setSearchResults} />
        <Main searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;