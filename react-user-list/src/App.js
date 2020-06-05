import React from 'react';
import './App.css';

import { Header } from "./components/Header/Header.js";
import { UsersList } from "./components/UsersList/UsersList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <UsersList />
    </div>
  );
}

export default App;
