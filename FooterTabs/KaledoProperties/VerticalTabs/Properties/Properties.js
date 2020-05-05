import React, { Component } from "react";
import "./Properties.css";
import ToggleBox from "./Behaviour/ToggleBox";
import Vehicles from "./Behaviour/Vehicles";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { Property: "Wasif", Value: 21 },
        { Property: "Ali", Value: 19 },
        { Property: "Saad", Value: 16 },
        { Property: "Asad", Value: 25 }
      ]
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { Property, Value } = student;
      return (
        <tr>
          <td>{Property}</td>
          <td>{Value}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <form>
        <div>
          <ToggleBox title="Show Vehicles">
            <Vehicles />
          </ToggleBox>
          <table id="students">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </form>
    );
  }
}

export default Properties;
