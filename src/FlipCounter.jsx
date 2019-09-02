import React, { Component } from 'react';
import "./FlipCounter.css";
class Counter extends Component{
constructor(props){
    super(props);
    this.state={ 
     count0:0,
     count1:0,
     count2:0,
     count3:0,
     count4:0,
     count5:0,
     count6:0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
add  =() =>{
    if(this.state.count0==9){
        this.setState({count0: this.state.count0=-1 })
        this.setState({count1: this.state.count1+1 })
    };
    
    if(this.state.count1==9){
        this.setState({count1: this.state.count1=-1 })
        this.setState({count2: this.state.count2+1 })
    };
    
    if(this.state.count2==9){
        this.setState({count2: this.state.count2=-1 })
        this.setState({count3: this.state.count3+1 })
    };

    if(this.state.count3==9){
        this.setState({count3: this.state.count3=-1 })
        this.setState({count4: this.state.count4+1 })
    };


    if(this.state.count4==9){
        this.setState({count4: this.state.count4=-1 })
        this.setState({count5: this.state.count5+1 })
    };
   


    this.setState({
     count0: this.state.count0 + 1
    
    })
  
};




handleChange(event) {
this.setState({value: event.target.value});
}

handleSubmit(event) {
this.setState({count0: parseInt(this.state.value%10) })
this.setState({count1: parseInt(this.state.value/10%10)})
this.setState({count2:parseInt(this.state.value/100%10) })
this.setState({count3: parseInt(this.state.value/1000%10) })
this.setState({count4: parseInt( this.state.value/10000%10) })
this.setState({count5:  parseInt(this.state.value/100000%10) })
event.preventDefault();
}


render(){
return(
<div>
<p>this is my counter: </p>
  <h1>
   <table>
<tr>
<td >{this.state.count5}</td>
<td >{this.state.count4}</td>
<td >{this.state.count3}</td>
<td >{this.state.count2}</td>
<td >{this.state.count1}</td>
<td>{this.state.count0}</td>
</tr>

   </table>
     </h1>
   <button onClick={this.add}>add</button>
 


<form onSubmit={this.handleSubmit}>
          <label>
          insert number
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
</div>



);


}

}
export default Counter;
