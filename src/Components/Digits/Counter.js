import React, { Component } from "react";
import Digits from "./Digits/Digits";
import "./Digits/Digits.css";

const Counter = props => {
  return (
    <div className="flex">
      <Digits value={props.pass.min} />
      <Digits value={props.pass.sec} />
      <Digits value={props.pass.mil} />
    </div>
  );
};
export default Counter;
