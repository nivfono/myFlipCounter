import React, { Component } from "react";
import "./FlipCounter.css";
import { arrayExpression } from "@babel/types";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
  
    };
  }
  add = (num) => {
    this.setState({ x: parseInt(this.state.x) + 1 });
    console.log("add activated");
    console.log(this.state.x);
  };
 
 
 
  myChangeHandler = (event) => {
    this.setState({ value: event.target.value });
    console.log("change activated");
  };

  mySubmitHandler = (event) => {
    
    this.setState({ x: this.state.value });
    console.log("submit activated");
    event.preventDefault();
  };

  render() {
   console.log(this.state.x)
   console.log(this.state.value)
   const arr = [
      parseInt((this.state.x / 100000) % 10),
      parseInt((this.state.x / 10000) % 10),
      parseInt((this.state.x / 1000) % 10),
      parseInt((this.state.x / 100) % 10),
      parseInt(this.state.x / 10) % 10,
      parseInt(this.state.x % 10)
    ];


    
    return (
      <div>
        <p>this is my counter: </p>
        <h1>
          <table>
            <tr>
              <td id="main">{arr[0]}</td>
              <td id="main">{arr[1]}</td>
              <td id="main">{arr[2]}</td>
              <td id="main">{arr[3]}</td>
              <td id="main">{arr[4]}</td>
              <td id="main">{arr[5]}</td>
            </tr>
          </table>
        </h1>
        <button onClick={this.add}>add</button>

        <form onSubmit={this.mySubmitHandler}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.myChangeHandler}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Counter;
