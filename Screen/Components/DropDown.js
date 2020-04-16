import React, { Component } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const Qualification = [
  { label: "BTECH", value: 1 },
  { label: "BSC", value: 2 },
  { label: "Diploma", value: 3 },
  { label: "MBA", value: 4 },
  { label: "MTECH", value: 5 },
  { label: "MS", value: 6 }
];

const DropDown = () => (
  <form>
    Qualification:     
          <Select options={Qualification} />       
  </form>
);

export default DropDown;

