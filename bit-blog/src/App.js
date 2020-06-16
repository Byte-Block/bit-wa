import React from "react"; //the correct way to organize imports!!!
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Authors } from "./components/Authors/Authors";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { DisplaySinglePost } from "./components/DisplaySinglePost/DisplaySinglePost";

import "./App.css";

const App = () => (
  <div className="App">
    <Container>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={DisplaySinglePost} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/authors/:id" component={}
          <Route exact path="/about" component={About} />
        </Switch>
      </MainContainer>
    </Container>
  </div>
);

export default App;
