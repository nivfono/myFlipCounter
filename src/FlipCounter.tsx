import React, { Component } from "react";
import "./FlipCounter.css";
import Container from "./Container";

interface Props {}

interface State {
  x: number;
  value: string;
}

class FlipCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      x: 0,
      value: ""
    };
  }

  add = () => {
    this.setState({ x: this.state.x + 1 });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    this.setState({ x: parseInt(this.state.value) });

    event.preventDefault();
  };

  render() {
    let mystring = String(this.state.x);
    var arr = mystring.split("");

    if (arr.length < 6) {
      for (var i = 0; i < 5; i++) arr.push("0");
    }
    const numbers = arr.map(nums => {
      return <td id="main">{nums}</td>;
    });
    return (
      <div>
        <p>mystring</p>

        <h1>
          <table>
            <tbody>
              <tr>{numbers}</tr>
            </tbody>
          </table>
        </h1>
        <button onClick={this.add}>add</button>
        <Container
          onSubmit={value => {
            this.setState({
              x: value || 0
            });
          }}
        />
      </div>
    );
  }
}
export default FlipCounter;
