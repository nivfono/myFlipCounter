import React, { Component } from "react";
import FlipCounter from "./FlipCounter";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
  }
  add = () => {
    this.setState({ x: parseInt(this.state.x) + 1 });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ x: this.state.value });

    event.preventDefault();
  };

  render() {
    let x = this.state.x;
    console.log(x);
    return (
      <div id="body">
        <FlipCounter title={this.state.x} />
        <button onClick={this.add}>add</button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
