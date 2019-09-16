import React, { Component } from "react";
import Input from "./Input";
import FlipCounter from "./FlipCounter";

interface State {
  newnum: number;
}

class Container extends Component<{}, State> {
  state = { newnum: 0 };

  render() {
    return (
      <div>
        <FlipCounter value={this.state.newnum} />
        <Input
          onSubmit={num => {
            this.setState({
              newnum: num || 0
            });
          }}
        />
      </div>
    );
  }
}
export default Container;
