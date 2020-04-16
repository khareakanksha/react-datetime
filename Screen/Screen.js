import React, { Component } from "react";

import Datetime from "./Components/Datetime";
import TextBox from "./Components/TextBox";
import Button from "./Components/Button";
import CheckBox from "./Components/CheckBox";
import Radio from "./Components/Radio";
import DropDown from "./Components/DropDown";
import TextArea from "./Components/TextArea";
import ToggleSwitch from "./Components/ToggleSwitch";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        email: "",
        age: "",
        gender: "",
        expertise: "",
        about: ""
      },

      // genderOptions: ["Male", "Female", "Others"],
      // skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <div>
          <h3>Create Customer Account</h3>
          <TextBox/>
          <Radio/>
          <CheckBox/>
          <DropDown/>
          <ToggleSwitch/>
          <Datetime/>
          <TextArea/>
          <br/>
          <Button/>
          <br/>
        </div>
      </form>
    );
  }
}

export default Screen; 

