import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Carousel from './components/Carousel.js';
import Card from './components/Card.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />

          <div class="container-fluid">
          <div class="title-arch">Welcome to Reverie <p> "Try not to get yourself killed"</p></div>
        <Card pictureClass=""  paragraph="test" title="BARBARIAN">
            <hr/>
            <p>cruel wicked and inhuman</p>
             <br/>
             <p>Attack: 7/10</p>
             <p>Hit Points: 3/10</p>
             <p>Speed: 6/10</p>
             <p>Range: 6/10</p>
        </Card>
        <Card pictureClass="project-2"  paragraph="test" title="PALADIN" >
          <hr/>
           <p>Champion of a cause.</p>
           <br/>
           <p>Attack: 6/10</p>
           <p>Hit Points: 6/10</p>
           <p>Speed: 4/10</p>
           <p>Range: 2/10</p>
        </Card>
        <Card pictureClass="project-3"  paragraph="test" title="MAGE" >
          <hr />
          <p>Magician or learned person.</p>
          <br/>
          <p>Attack: 7/10</p>
          <p>Hit Points: 3/10</p>
          <p>Speed: 6/10</p>
          <p>Range: 6/10</p>
          </Card>
        <Card pictureClass="project-4"  paragraph="test" title="ROGUE" >
          <hr/>
          <p>Wise & skilled archer.</p>
          <br/>
          <p>Attack: 5/10</p>
          <p>Hit Points: 4/10</p>
          <p>Speed: 6/10</p>
          <p>Range: 10/10</p>
          </Card>
        <div class="clearfix"></div>
            </div>
            <br/>
              <Signup />

              <Footer />
{/* 	<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
		</p>*/}


      </div>
    );
  }
}

export default App;
