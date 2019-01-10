import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      title: "Enter Task Name",
      turn: false
    };
  }

  editFun = () => {
    this.setState({
      ...this.state,
      turn: true
    });
  }
  changeFun(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }
  enterFun(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        turn: false
      });
    }
  }
  blurFun(event) {
    this.setState({
      ...this.state,
      turn: false
    });
  }
  render() {
    let output = null;
    if (this.state.turn) {
      output = (
        <div className="Container">
          <input
            autoFocus
            type="text"
            value={this.state.title}
            onChange={event => this.changeFun(event)}
            onKeyPress={event => this.enterFun(event)}
            onBlur={event => this.blurFun(event)}
          />
        </div>
      );
    } else {
      output = (
        <div className="Container">
        <span onClick={this.editFun}>
          <h1 id="title">
          {this.state.title} 
          <i className="fas icon fa-pencil-alt"/>
          </h1>

          </span>
        </div>
      );
    }
    return <div>{output}</div>;
  }
}
