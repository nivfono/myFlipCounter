import React, { Component } from "react";

import "./App.css";
import Container from "./Container";
class App extends Component {
  render() {
    return (
      <div id="body">
        <Container num={125.3} />
      </div>
    );
  }
}

export default App;
