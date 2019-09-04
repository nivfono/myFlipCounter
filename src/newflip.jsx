import React, { Component } from 'react'

 class newflip extends Component {
    constructor(props) {
        super(props);
        this.state = {
          x: 0
        };
      }
      add = num => {
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
        const arr = [
          parseInt((this.state.x / 100000) % 10),
          parseInt((this.state.x / 10000) % 10),
          parseInt((this.state.x / 1000) % 10),
          parseInt((this.state.x / 100) % 10),
          parseInt(this.state.x / 10) % 10,
          parseInt(this.state.x % 10)
        ];
    
        return (
          <div>
            <p>this is my counter: </p>
            <h1>
              <table>
                <tbody>
                  <tr>
                    <td id="main">{arr[0]}</td>
                    <td id="main">{arr[1]}</td>
                    <td id="main">{arr[2]}</td>
                    <td id="main">{arr[3]}</td>
                    <td id="main">{arr[4]}</td>
                    <td id="main">{arr[5]}</td>
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
export default newflip;