import React, { Component } from "react";
import "./FlipCounter.css";

const FlipCounter = props => {
  var mystring = String(props.title);
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
    </div>
  );
};

export default FlipCounter;
