import React, { Component } from 'react';
import { render } from 'react-dom';
import FormContainer from './FormContainer';
import './style.css';
import Header from "./Header";
import Footer from "./Footer";




class App extends Component {
  constructor() {
  }

  render() {
    return (
      <div>
                <Header/>
                  <FormContainer />
                  <Footer/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
