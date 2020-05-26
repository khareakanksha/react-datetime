import React, { Component } from "react";
import TimePicker from 'react-bootstrap-time-picker';



class Time extends React.Component {
  constructor() {
    super();

    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = { time: 0 };
  }

  handleTimeChange(time) {
    console.log(time);   
    this.setState({ time });
  }

  render() {
    return <TimePicker onChange={this.handleTimeChange} value={this.state.time} />;
  }
}

export default Time;
