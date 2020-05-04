import React from "react";
import Properties from "./Properties";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Row>
        <Col xs="6" sm="4" md="4">
          <Nav tabs vertical pills>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Properties
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Services
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="6" sm="6" md="6">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Properties />
            </TabPane>
            <TabPane tabId="2">
              <h4>Services Tab</h4>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    );
  }
}

export default VerticalTabs;
