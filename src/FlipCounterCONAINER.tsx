import React, { Component } from "react";
import FlipCounter from "./FlipCounter";
import "./App.css";

type Props = {
  onSubmit: (value: number | undefined) => void;
};

type State = {
  value: string | undefined;
};

class flipCountercontainer extends Component<Props, State> {
  state = { value: "" };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    const intValue = this.state.value ? parseInt(this.state.value) : undefined;
    this.props.onSubmit(intValue);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default flipCountercontainer;
