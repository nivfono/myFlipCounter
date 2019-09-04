import React, { Component } from "react";
import "./FlipCounter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
     x:"000000"
    };
  }
  add = () => {
    
    this.setState({ x:"00000"+ parseInt(parseInt(this.state.x) + 1) });
   
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    
  };

  handleSubmit = event => {
    this.setState({ x: this.state.value });

    event.preventDefault();
  };

  render() {
    let mystring =this.state.x;
   let array=["0","0","0","0","0","0"]
   

    for(var i=0;i<6;i++){   
      if(mystring[i]!=null)
      array[mystring.length-i-1]=mystring[i];
 
    } 
array.reverse();

 
return (
      <div>
        <p>mystring</p>
        <h1>
          <table>
            <tbody>
              <tr>
                <td id="main">{array[0]}</td>
                <td id="main">{array[1]}</td>
                <td id="main">{array[2]}</td>
                <td id="main">{array[3]}</td>
                <td id="main">{array[4]}</td>
                <td id="main">{array[5]}</td>
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
