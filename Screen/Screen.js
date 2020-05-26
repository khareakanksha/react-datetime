import React, { Component } from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

// import TabsComp from "./Components/TabsComp";

import Button from "./Components/Button";
import CheckBox from "./Components/CheckBox";
import Radio from "./Components/Radio";
import Datetime from "./Components/Datetime";
import TextBox from "./Components/TextBox";
import DropDown from "./Components/DropDown";
import TextArea from "./Components/TextArea";
import ToggleSwitch from "./Components/ToggleSwitch";
import Date from "./Components/Date";
//import Datetimebo from "./Components/Datetimebo";
import Time from "./Components/Time";


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
      }

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
          <Time/>
          <TextBox />
          <Radio />
          <CheckBox />
          <DropDown />
          <ToggleSwitch />
          <Datetime />
          <TextArea />
          <br />
          <Button />
                    <br />

        </div>
      </form>
    );
  }
}

export default Screen;
