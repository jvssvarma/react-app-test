import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Jumbotron from './Jumbotron';
import Left from './Left';
import Center from './Center';
import Right from './Right';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron />
        <div className='container'>
          <div className='row'>
            <Left />
            <Center />
            <Right />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
