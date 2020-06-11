import React, { Component } from 'react';
import './App.css';

import { fetchRandomUsers } from './components/fetchRandomUsers/fetchRandomUsers';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Stats } from './components/Stats/Stats';
import { Users } from './components/Users/Users';
import { Footer } from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomUsers: [],
      listView: JSON.parse(localStorage.getItem('listView')),
      filteredUsers: []
    }

    this.switchViewMode = this.switchViewMode.bind(this);
    this.loadNewRandomUsers = this.loadNewRandomUsers.bind(this);
    this.setFilteredUsersState = this.setFilteredUsersState.bind(this);
  }

  setFilteredUsersState = (filteredUsers) => {
    this.setState({
      filteredUsers: filteredUsers
    });
  }

  switchViewMode = () => {
    this.setState({ listView: !this.state.listView }, () => { localStorage.setItem('listView', this.state.listView) })
  }

  loadNewRandomUsers = () => {
    fetchRandomUsers().then(data => this.setState({
      randomUsers: data.results,
      filteredUsers: data.results
    }, localStorage.setItem('randomUsers', JSON.stringify(data.results))))
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  componentDidMount() {
    if (localStorage.getItem('randomUsers')) {
      this.setState({
        randomUsers: JSON.parse(localStorage.randomUsers),
        filteredUsers: JSON.parse(localStorage.randomUsers)
      })
    } else {
      fetchRandomUsers()
        .then(data => this.setState({
          randomUsers: data.results,
          filteredUsers: data.results
        }, () => { localStorage.setItem('randomUsers', JSON.stringify(data.results)) }))
        .catch(error => {
          console.log(error);
          alert(error)
        });
    }
  }

  render() {
    return (
      <div className="App" >
        <Header reload={this.loadNewRandomUsers}
          viewMode={this.state.listView}
          switchView={this.switchViewMode}
        />
        <SearchBar getSearchFieldValue={this.getSearchFieldValue}
          randomUsers={this.state.randomUsers}
          setSearchResult={this.setFilteredUsersState}
        />
        <Stats users={this.state.filteredUsers} />
        <Users listOrGridView={this.state.listView}
          users={this.state.randomUsers}
          filteredUsers={this.state.filteredUsers}
        />
        <Footer />
      </div >
    );
  }

}

export default App;