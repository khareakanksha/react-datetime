import React, { Component } from 'react';
import { render } from 'react-dom';
import Screen from './Screen/Screen';
import './style.css';
import Header from "./Header";
import Footer from "./Footer";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import FooterTab from "./FooterTabs/FooterTab";


//------------Root file-----------------
class App extends Component {
  constructor() {
  }

  render() {
    return ( 
      <div>
                  <Header/>
                  <Screen />
                  <FooterTab/>
                  <Footer/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
