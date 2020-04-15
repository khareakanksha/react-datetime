import React, { Component } from "react";

import Header from "./Components/Header";
import Datetime from "./Components/Datetime";
import TextBox from "./Components/TextBox";
import Button from "./Components/Button";
import CheckBox from "./Components/CheckBox";
import Footer from "./Components/Footer";
import Radio from "./Components/Radio";
import DropDown from "./Components/DropDown";

class FormContainer extends Component {
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
          <Header/>
          <h3>Create Customer Account</h3>
          <TextBox/>
          <Radio/>
          <CheckBox/>
          <DropDown/>
          <Datetime/>
          <br/>
          <Button/>
          <br/>
          <Footer/>
        </div>
      </form>
    );
  }
}

export default FormContainer; 

