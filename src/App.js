import React, { Component } from 'react';
import './App.css';
// import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';



const particlesOptions = 
{
  particles: {
    number: {
      value: 170,
      density:{
        enable:true,
        value_area: 800
      }
    }
  }
};

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(
          "a403429f2ddf4b49b307e318f00e528b",
          "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response){
          console.log(response);
        },
        function(err){
          console.log(err);
        }
      );
  }

  render(){
    return(
      <div className="App">
          <Particles 
            className='particles'
            params={ particlesOptions }
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
      </div>
    );
  }
}

export default App;
