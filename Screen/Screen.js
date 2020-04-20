import React, { Component } from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

import TabsComp from "./Components/TabsComp";

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
          <TabsComp />
        </div>
      </form>
    );
  }
}

export default Screen;
