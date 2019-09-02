import React, { Component } from "react";
import "./FlipCounter.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: ["0", "0", "0", "0", "0", "0"],
      x: 0
    };
  }

  add = () => {
    this.setState({ x: this.state.x + 1 });
  };
  handleSubmit=()=>{


  };
 


  render() {
    return (
      <div>
        <p>this is my counter: </p>
        <h1>
          <table>
            <tr>
              <td id="main">{parseInt((this.state.x / 100000) % 10)}</td>
              <td id="main">{parseInt((this.state.x / 10000) % 10)}</td>
              <td id="main">{parseInt((this.state.x / 1000) % 10)}</td>
              <td id="main">{parseInt((this.state.x / 100) % 10)}</td>
              <td id="main">{parseInt(this.state.x / 10) % 10}</td>
              <td id="main">{parseInt(this.state.x % 10)}</td>
            </tr>
          </table>
        </h1>
        <button onClick={this.add}>add</button>

        <form onSubmit={this.handleSubmit}>
          <label>
            insert number
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Counter;
