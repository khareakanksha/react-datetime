import React, { Component } from "react";
// import "./Behavoiur.css";

class Behaviour extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { id: 1, date: "2014-04-18", total: 121.0, name: "A", points: 5 },
        { id: 2, date: "2014-04-21", total: 121.0, name: "B", points: 10 },
        { id: 3, date: "2014-08-09", total: 121.0, name: "C", points: 15 },
        { id: 4, date: "2014-04-24", total: 121.0, name: "D", points: 20 },
        { id: 5, date: "2014-04-26", total: 121.0, name: "E", points: 25 }
      ],
      expandedRows: []
    };
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.id);
    const itemRows = [
      <tr onClick={clickCallback} key={"row-data-" + item.id}>
        <td>{item.date}</td>
        <td>{item.total}</td>
      </tr>
    ];

    if (this.state.expandedRows.includes(item.id)) {
      itemRows.push(
        <tr key={"row-expanded-" + item.id}>
          <td>{item.name}</td>
          <td>{item.points}</td>
        </tr>
      );
    }

    return itemRows;
  }

  render() {
    let allItemRows = [];

    this.state.data.forEach(item => {
      const perItemRows = this.renderItem(item);
      allItemRows = allItemRows.concat(perItemRows);
    });

    return (
      <table id="data">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{allItemRows}</tbody>
      </table>
    );
  }
}

export default Behaviour;
