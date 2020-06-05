import React from 'react';
import './App.css';

import { Header } from "./components/Header/Header.js";
import { UsersList } from "./components/UsersList/UsersList.js";
import { Footer } from "./components/Footer/Footer";
import { UserCard } from "./components/UserCard/UserCard";
import { UserGrid } from "./components/UserGrid/UserGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <UsersList />
      <UserGrid />
      <Footer />
    </div>
  );
}

export default App;
