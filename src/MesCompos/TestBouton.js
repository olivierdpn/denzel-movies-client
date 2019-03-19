import React, { Component } from 'react';
import {Button} from 'reactstrap';

class TestBouton extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: false, msg: [] };
    }
  
    handleClick = api => e => {
      e.preventDefault();
  
      this.setState({ loading: true });
      fetch('https://denzel-movies-back.netlify.com/.netlify/functions/server/' + api)
        .then(response=>response.json())
        .then(json => this.setState({ loading: false, msg: json }));
    };
  
    render() {
      const { loading, msg } = this.state;
  
      return (
        <p>
          <Button onClick={this.handleClick('movies')}>
            {loading ? 'Loading...' : 'You should watch... 🍿'}
          </Button>
          
          <br />
          <span>{msg.title}</span>
          <br></br>
          <span>{msg.synopsis}</span>
          <br></br>
          <span>{msg.rating}</span>
        </p>
      );
    }
  }
  export default TestBouton;