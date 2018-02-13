import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Carousel from './components/Carousel.js';
import Card from './components/Card.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <Card src="https://img00.deviantart.net/6b01/i/2014/044/4/7/ogre_concept_by_jubjubjedi-d7694bl.jpg" title="Ogre" />
        <Card src="https://vignette.wikia.nocookie.net/defiaseu/images/4/4b/Female-Paladin-l.jpg/revision/latest?cb=20110203224240" title="Paladin" />
        <Card src="https://pre00.deviantart.net/620e/th/pre/f/2013/047/6/8/lightning_mage_by_argent_sky-d5v4glb.jpg" title="Mage" />
        <Card src="http://www.capsulecomputers.com.au/wp-content/uploads/2013/04/MightMagic-X-Legacy-Elf-Ranger-Female-01.jpg" title="Ranger" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
