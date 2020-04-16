import React, { Component } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';


const ToggleSwitch = () => {
  return (
    <>
      

      <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitchesChecked'
          defaultChecked
        />
        <label className='custom-control-label' htmlFor='customSwitchesChecked'>
          Toggle element
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;