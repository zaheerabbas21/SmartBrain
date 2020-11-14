import React, { Component } from 'react';
import './App.css';
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
  render(){
    return(
      <div className="App">
          <Particles className='particles'
                params={particlesOptions}
            />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
      </div>
    );
  }
}

export default App;
