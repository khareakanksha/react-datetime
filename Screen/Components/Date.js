import React, { Component } from "react";
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import PropTypes from "prop-types";

 
class Date extends React.Component
{
  // getInitialState(){
  //   return {
  //         date: new Date().toISOString(),
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
    date: new Date().toLocaleString()
  };
  }

  handleChange(value) {
    this.setState({
      date: value
    });
  }

  componentDidUpdate(){
    var hiddenInputElement = document.getElementById("example-datepicker");
    console.log(hiddenInputElement.value); 
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) 
  }

  render(){
    return <FormGroup>
      <ControlLabel>Select Date</ControlLabel>
      <br/>
<DatePicker onChange={this.handleChange} placeholder="Placeholder" value={this.state.date} id="example-datepicker" />; 
      <br/>
      <HelpBlock>Help</HelpBlock>
    </FormGroup>  
    
     
  }
}

export default Date;