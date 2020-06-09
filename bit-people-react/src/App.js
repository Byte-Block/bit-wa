import React, { Component } from 'react';
import './App.css';

import { fetchRandomUsers } from './components/fetchRandomUsers/fetchRandomUsers';
import { Header } from './components/Header/Header';
import { UsersList } from './components/UsersList/UsersList';
import { Footer } from './components/Footer/Footer';
import { UserGrid } from './components/UserGrid/UserGrid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomUsers: []
    }
  }

  componentDidMount() {
    fetchRandomUsers().then(data => this.setState({
      randomUsers: data.results
    })).catch(error => {
      console.log(error);
      alert(error)
    });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <UsersList users={this.state.randomUsers} />
        <UserGrid users={this.state.randomUsers} />
        <Footer />
      </div >
    );
  }

}

export default App;
