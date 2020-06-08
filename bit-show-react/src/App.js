import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { GalleryOfShows } from './components/GalleryOfShows/GalleryOfShows';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App container">
      <Header />
      <GalleryOfShows />
      <Footer />
    </div>
  );
}

export default App;
