import React, { Component } from "react";
import "./FlipCounter.css";

interface Props {
  value: number;
}

class FlipCounter extends Component<Props> {
  makearray = () => {
    const { value: num } = this.props;
    let mynum = Math.round(num);
    let mystring = String(mynum);
    var arr1 = ["0", "0", "0", "0", "0", "0"];
    var arr2 = mystring.split("");
    arr2.reverse();
    for (var i = 0; i < arr2.length; i++) arr1[i] = arr2[i];
    arr1.reverse();
    return arr1;
  };

  render() {
    let arr1 = this.makearray();
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
