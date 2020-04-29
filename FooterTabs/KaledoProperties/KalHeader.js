import React, { Component } from 'react'
import './KalHeader.css'; // Tell webpack that Button.js uses these styles


class KalHeader extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, Property: 'Wasif', Value: 21},
            { id: 2, Property: 'Ali', Value: 19},
            { id: 3, Property: 'Saad', Value: 16 },
            { id: 4, Property: 'Asad', Value: 25}
         ]
      }
   }

renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, Property, Value } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{Property}</td>
               <td>{Value}</td>
            </tr>
         )
      })
   }

   render() {
      return (
        <form>
          <div>
            <h1 id='title'>Kaledo Properties</h1>   
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </form>
      )
   }
}

export default KalHeader; //exporting a component make it reusable and this is the beauty of react

