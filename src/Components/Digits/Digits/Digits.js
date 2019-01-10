import React, { Component } from "react";
import "./Digits.css";
const Digits = props => {
  return (
    <div className="Digits">
      <h1>{props.value < 10 ? `0${props.value}` : props.value}</h1>
    </div>
  );
};
export default Digits;
