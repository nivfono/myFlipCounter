import React, { Component } from "react";
import Counter from "/home/trucknet/myreact/src/FlipCounter.jsx";
import NCounter from "./NewFlipCounter"
import "./App.css";
class App extends Component {
  render() {
    return (
      <div id="body">
        <Counter />
<hr></hr>
    
    
     <NCounter />
      </div>
    );
  }
}

export default App;
