import React, {Component} from 'react';
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import StickyFooter from 'react-sticky-footer';


const FooterPage = () => {
  return (
    <form>
    <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#007BFF",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "#007BFF",
    padding: "2rem"
    }}
> 
CopyRight @2018 TCS
</StickyFooter>
</form>
  );
}

export default FooterPage;