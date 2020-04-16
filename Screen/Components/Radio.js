import React, { Component } from "react";
import { RadioGroup, RadioButton,ReversedRadioButton } from 'react-radio-buttons';

class Radio extends Component {
  render() {
    return (
      <form>
        <div class="form-group">Gender:<br/>
       <RadioGroup onChange={ this.onChange } horizontal>
   <ReversedRadioButton value="Male">
    Male
  </ReversedRadioButton>
    <ReversedRadioButton value="Female">
    Female
  </ReversedRadioButton>
  <ReversedRadioButton value="Others">
    Others
  </ReversedRadioButton>
</RadioGroup>
        </div>
      </form>
    );
  }
}
export default Radio;

