import React, { Component } from 'react'
import VerticalTabs  from "./VerticalTabs/VerticalTabs";


class KaledoProperties extends Component {

   render() {
      return (
        <form>
          <div>
            <h1 id='title'>Widget Name:</h1>   
                    <VerticalTabs/>
         </div>
         </form>
      )
   }
}

export default KaledoProperties; 