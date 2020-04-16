import React, { Component } from "react";

class TextBox extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label>Customer Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="age"
          />
        </div>
      </form>
    );
  }
}
export default TextBox;
