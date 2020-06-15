import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-materialize';
import { SearchBar } from './components/SearchBar/SearchBar';
import { MainComponent } from './components/MainComponent/MainComponent';

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
    }, () => console.log(this.state.searchResults)
    );
  }

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar setSearchResults={this.setSearchResults} />
          <MainComponent
            searchResults={this.state.searchResults}
          />
        </Container>
      </div>
    );
  }
}

export default App;