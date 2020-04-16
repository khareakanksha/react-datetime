import React, { Component } from "react";
  
const TextArea = () => {
    return (
        <div className="form-group"><br/>
            <label htmlFor="exampleFormControlTextarea1">
            Enter Details:
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </div>
    )
}


export default TextArea;
