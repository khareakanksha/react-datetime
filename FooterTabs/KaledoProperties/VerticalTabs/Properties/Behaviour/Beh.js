import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Beh extends Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    if (row.id < 2) return true;
    else return false;
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }

  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };
    return (
      <BootstrapTable data={ products }
        options={ options }
        striped
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        search>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Beh;

