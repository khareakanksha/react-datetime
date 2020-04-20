import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Button from "./Button";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Datetime from "./Datetime";
import TextBox from "./TextBox";
import DropDown from "./DropDown";
import TextArea from "./TextArea";
import ToggleSwitch from "./ToggleSwitch";

class TabsComp extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Personal Details">
          <TextBox />
          <Radio />
          <CheckBox />
          <DropDown />
        </Tab>
        <Tab eventKey="profile" title="Other Details">
          <ToggleSwitch />
          <Datetime />
          <TextArea />
          <br />
          <Button />
          <br />{" "}
        </Tab>
        <Tab eventKey="contact us" title="Contact us">
          <label>
            <h6>Support & Feedback:</h6>
            <br />
            If you need help, please contact us. To share product feedback on
            our products, please visit our community here.
            <br />
            <br />
            Email Address: demo@demo.com
            <br /> Contact Number: 1234567890
          </label>
        </Tab>
      </Tabs>
    );
  }
}
export default TabsComp;
