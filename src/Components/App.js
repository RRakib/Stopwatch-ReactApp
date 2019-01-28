import React, { Component } from "react";
import Title from "./Title/Title";
import Counter from "./Digits/Counter";
import Eventhandler from "./EventHandler/Eventhandler";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        min: 0,
        sec: 0,
        mil: 0
      }
    };
  }
  getStart() {
    this.intervalID = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mil = this.state.time.mil;

      if (mil >= 10) {
        sec = sec + 1;
        mil = 0;
      }
      if (sec >= 60) {
        min = min + 1;
        sec = 0;
      }
      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mil: mil + 1
        }
      });
    }, 100);
  }
  getPause() {
    clearInterval(this.intervalID);
  }
  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mil: 0
      }
    });
  }
  render() {
    return (
      <div>
        <Title />
        <Counter pass={this.state.time} />
        <Eventhandler
          start={this.getStart.bind(this)}
          pause={this.getPause.bind(this)}
          restart={this.getReset.bind(this)}
        />
        <footer>&copy; Developed By Rakib Uddin</footer>
      </div>
    );
  }
}

export default App;
