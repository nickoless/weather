import React, { Component } from 'react';
import Weather from './Weather';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className='card'>
        <Weather />
      </div>
    );
  }
}

export default App;
