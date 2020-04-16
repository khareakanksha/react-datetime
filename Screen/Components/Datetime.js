import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";

class Datetime extends Component {
  state = {
    date: new Date()
  };
 
  onChange = date => this.setState({ date });

  render() {
    return ( 
      <form><br/>
      <div>
        <label>Date & time:</label>
        <br></br>
        <DateTimePicker onChange={this.onChange} value={this.state.date} />
        </div>
      </form>
    );
  }
}

export default Datetime;
