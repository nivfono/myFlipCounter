import React, { Component } from "react";
import "./App.css";

type Props = {
  onSubmit: (num: number | undefined) => void;
};

type State = {
  value: string | undefined;
  newnum: number;
};

class Container extends Component<Props, State> {
  state = { value: "", newnum: 0 };

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
      <div>
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

export default Container;
