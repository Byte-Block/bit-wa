import React, { Component } from 'react';
import './App.css';

import { fetchRandomUsers } from './components/fetchRandomUsers/fetchRandomUsers';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Users } from './components/Users/Users';
import { Footer } from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomUsers: [],
      listView: JSON.parse(localStorage.getItem('listView')),
      searchValue: '',
      filteredUsers: []
    }

    this.switchViewMode = this.switchViewMode.bind(this);
    this.loadNewRandomUsers = this.loadNewRandomUsers.bind(this);
    this.getSearchFieldValue = this.getSearchFieldValue.bind(this);
    this.filterUsersBySearchValue = this.filterUsersBySearchValue.bind(this);
  }

  getSearchFieldValue = (event) => {
    this.setState({
      searchValue: event.target.value
    }, () => this.filterUsersBySearchValue(this.state.searchValue));
  }

  filterUsersBySearchValue = (searchValue) => {
    const filteredUsers = this.state.randomUsers.filter(user => {
      if (user.name.first.toLowerCase().includes(searchValue.toLowerCase())
        || user.name.last.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else return false;
    })
    this.setState({
      filteredUsers: filteredUsers
    });
  }


  switchViewMode = () => {
    this.setState({ listView: !this.state.listView }, () => { localStorage.setItem('listView', this.state.listView) })
  }

  loadNewRandomUsers = () => {
    fetchRandomUsers().then(data => this.setState({
      randomUsers: data.results
    }, localStorage.setItem('randomUsers', JSON.stringify(data.results))))
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  componentDidMount() {
    if (localStorage.getItem('randomUsers')) {
      this.setState({
        randomUsers: JSON.parse(localStorage.randomUsers)
      })
    } else {
      fetchRandomUsers()
        .then(data => this.setState({
          randomUsers: data.results
        }, () => { localStorage.setItem('randomUsers', JSON.stringify(data.results)) }))
        .catch(error => {
          console.log(error);
          alert(error)
        });
    }
  }

  render() {
    //console.log(this.state.randomUsers);
    return (
      <div className="App" >
        <Header reload={this.loadNewRandomUsers} viewMode={this.state.listView} switchView={this.switchViewMode} />
        <SearchBar getSearchFieldValue={this.getSearchFieldValue} />
        <Users listOrGridView={this.state.listView} searchFieldValue={this.state.searchValue} users={this.state.randomUsers} filteredUsers={this.state.filteredUsers} />
        <Footer />
      </div >
    );
  }

}

export default App;
// {this.state.listView ?
//   <List users={this.state.randomUsers} />
//   : <Grid users={this.state.randomUsers} />
// }