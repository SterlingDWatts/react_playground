import React, { Component } from 'react';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <RouletteGun/>
      </div>
    );
  }
}

export default App;