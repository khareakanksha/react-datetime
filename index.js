import React, { Component } from 'react';
import { render } from 'react-dom';
import FormContainer from './FormContainer';
import './style.css';


class App extends Component {
  constructor() {
  }

  render() {
    return (
      <div>
        <FormContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
