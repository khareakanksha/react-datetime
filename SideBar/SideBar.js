import React, { Component } from "react";
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu} from 'semantic-ui-react';
import './SideBar.scss';
 
 class SideBar extends Component {
     render() {
  return (
    <form>
    <div>
 <Menu borderless vertical stackable fixed='left' className='side-nav'>
        {/*...*/}
      </Menu>
    </div>
    </form>
 );
  }
}

export default SideBar;
