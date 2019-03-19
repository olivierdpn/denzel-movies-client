import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './MesCompos/Deck';


class App extends Component {
  render() {
    return (
      <div >
      <h1 class="text-center">A random movie of Denzel</h1>
      <Deck/>
      </div>
    );
  }
}

export default App;
