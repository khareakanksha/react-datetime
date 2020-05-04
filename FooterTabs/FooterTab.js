import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Console from "./Console/Console";
import KaledoProperties from "./KaledoProperties/KaledoProperties";


class FooterTab extends Component {
  render() {
    return (
      <Tabs>
        <Tab eventKey="Console" title="Console">
          <Console/>
        </Tab>
        <Tab eventKey="Kaledo Properties" title="Kaledo Properties">
                    <KaledoProperties/>
        </Tab>
      </Tabs>
    );
  }
}
export default FooterTab;
