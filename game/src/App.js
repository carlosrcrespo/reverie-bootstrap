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

          <div class="container-fluid">
          <div class="title-arch">Our Project<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p></div>
        <Card pictureClass=""  paragraph="test" title="Ogre"/>
        <Card pictureClass="project-2"  paragraph="test" title="Paladin" />
        <Card pictureClass="project-3"  paragraph="test" title="Mage" />
        <Card pictureClass="project-4"  paragraph="test" title="Rogue" />
        <div class="clearfix"></div>
            </div>
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
