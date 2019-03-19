import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './MesCompos/Deck';
import TestBouton from './MesCompos/TestBouton';

class App extends Component {
  render() {
    return (
      <div class="text-center">
      <h1 >A random movie of Denzel</h1>
      <br></br>
      <TestBouton/>
      <br></br>
      <Deck/>
      
      </div>
    );
  }
}

export default App;
