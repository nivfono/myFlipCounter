import React, { Component } from "react";
import "./FlipCounter.css";

class Counter extends Component {
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
    let mystring = String(this.state.x);

    var arr = mystring.split("");
    arr.reverse();

    if (arr.length < 6) {
      for (var i = 0; i < 6 - (arr.length - 4); i++) arr.push("0");
    }

    return (
      <div>
        <p>mystring</p>
        <h1>
          <table>
            <tbody>
              <tr>
                <td id="main">{arr[5]}</td>
                <td id="main">{arr[4]}</td>
                <td id="main">{arr[3]}</td>
                <td id="main">{arr[2]}</td>
                <td id="main">{arr[1]}</td>
                <td id="main">{arr[0]}</td>
              </tr>
            </tbody>
          </table>
        </h1>
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
export default Counter;
