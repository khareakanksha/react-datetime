import React, { Component } from "react";
import Toggle from 'react-toggle';


class ToggleSwitch extends Component {
  constructor(){
    this.state.baconIsReady: true

  }
  render() {
    return (
      <label>
  <Toggle
    defaultChecked={this.state.baconIsReady}
    onChange={this.handleBaconChange} />
  <span>Wrapper label tag</span>
</label>
    );
  }
}

export default ToggleSwitch;