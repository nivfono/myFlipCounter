import React, { Component } from "react";
import "./FlipCounter.css";

interface Props {
  num: number;
}

class FlipCounter extends Component<Props> {
  render() {
    const { num } = this.props;
    let mynum = Math.round(num);
    if (this.props.num > -5) mynum = this.props.num;
    let mystring = String(mynum);
    var arr1 = ["0", "0", "0", "0", "0", "0"];
    var arr2 = mystring.split("");
    arr2.reverse();
    for (var i = 0; i < arr2.length; i++) arr1[i] = arr2[i];
    arr1.reverse();
    const numbers = arr1.map(nums => {
      return <td id="main">{nums}</td>;
    });
    return (
      <div>
        <h1>
          <table>
            <tbody>
              <tr>{numbers}</tr>
            </tbody>
          </table>
        </h1>
      </div>
    );
  }
}
export default FlipCounter;
