import React, { Component } from "react";
import "./Eventhandler.css";
export default class Eventhandler extends Component {
  constructor() {
    super();
    this.state = {
      start: true,
      pause: false,
      restart: false
    };
  }

  startHandler() {
    this.setState({
      ...this.state,
      pause: true,
      start: false
    });
    this.props.start();
  }
  pauseHandler() {
    this.setState({
      ...this.state,
      start: true,
      restart: true
    });
    this.props.pause();
  }
  restartHandler() {
    this.setState({
      ...this.state,
      start: true,
      restart: false
    });
    this.props.restart();
  }

  eventhandler() {
    let output = null;

    if (this.state.start && !this.state.restart) {
      output = (
        <div>
          <button className="Button" onClick={event => this.startHandler()}>
            Start
          </button>
        </div>
      );
      return output;
    } else if (this.state.pause && !this.state.start) {
      output = (
        <div>
          <button className="Button" onClick={event => this.pauseHandler()}>
            Pause
          </button>
        </div>
      );
      return output;
    } else if (this.state.start && this.state.restart) {
      output = (
        <div>
          <button className="Button" onClick={event => this.startHandler()}>
            Start
          </button>{" "}
          <button className="Button" onClick={event => this.restartHandler()}>
            Restart
          </button>
        </div>
      );
      return output;
    }
  }
  render() {
    return <div className="flex">{this.eventhandler()}</div>;
  }
}
