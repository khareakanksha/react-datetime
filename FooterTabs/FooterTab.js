import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Console from "./Console/Console";
import KalHeader from "./KaledoProperties/KalHeader";


class FooterTab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="Console" title="Console">
          <Console/>
        </Tab>
        <Tab eventKey="Kaledo Properties" title="Kaledo Properties">
                    <KalHeader/>
        </Tab>
      </Tabs>
    );
  }
}
export default FooterTab;
