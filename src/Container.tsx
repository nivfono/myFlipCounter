import React, { Component } from "react";
import Input from "./Input";
import FlipCounter from "./FlipCounter";

interface Props {
  num: number;
}
interface State {
  newnum: number;
}

class Container extends Component<Props, State> {
  state = { newnum: this.props.num };

  render() {
    const mynum = Math.round(this.state.newnum);

    return (
      <div>
        <FlipCounter value={mynum} />
        <Input
          num={this.state.newnum}
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
