import React, { Component } from "react";

import "./App.css";
import Container from "./Container";
class App extends Component {
  render() {
    return (
      <div id="body">
        <Container num={158.7} />
      </div>
    );
  }
}

export default App;
