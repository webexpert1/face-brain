import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
 

const particlesOptions = {
  particles: {
    value: 30,
    density: {
      enable: true,
      value_area: 800
    }
  }
}

let app = new Clarifai.App({apiKey: 'ba9d2dcf6dc24cd3b9e21dfe02da907a'});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click');

      app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, 
          "https://samples.clarifai.com/metro-north.jpg").then(
        function(response) {
          // do something with response
          console.log(response); 
        },
        function(err) {
          // there was an error
        }
      );

  }
  
  render() {
    return (
        <div className="App">
        <Particles className="particles"
          params = {particlesOptions}
         />
    
          <Navigation/>
          <Logo />
          <Rank />
          <ImageLinkForm 
              onButtonSubmit={this.onButtonSubmit} 
              onInputChange={this.onInputChange} />
        </div>
      );
  }
}

export default App;
