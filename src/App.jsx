import React, { Component } from "react";
import Counter from "/home/trucknet/myreact/src/FlipCounter.jsx";
import Newflip from "/home/trucknet/myreact/src/newflip.jsx";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div id="body">
        <Counter />
        <Newflip  />
  
      </div>
    );
  }
}

export default App;
