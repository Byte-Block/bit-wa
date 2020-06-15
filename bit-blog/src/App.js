import React from 'react';
import './App.css';

import { fetchPosts } from './components/fetch/fetch';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Authors } from './components/Authors/Authors';
import { About } from './components/About/About';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }

  }

  componentDidMount() {
    fetchPosts()
      .then(data => data.slice(0, 5))
      .then(data => console.log(data)
      );
  }

  render() {
    return (
      <div className="App">
        <Container >
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/authors' component={Authors} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Container>
      </div>
    );
  }

}

export default App;
