import React, { Component } from 'react';
import {createUser, createGame} from '../scripts.js'
 
class EnterUsername extends Component {
 state = {
   input: ""
 }

 handleChange = (e) => {
   this.setState({
     input: e.target.value
   });
}

clearInput=()=>{
  this.setState({
    input: ""
  });
}

 handleClick = () => {
   if(this.state.input !== ""){
    createGame(this.state.input)
    createUser(this.state.input)
    this.clearInput()
   }
 }

  render() {
    return (
        <div>
          Enter username<br/>
          to create new game:<br/>
          <input type="text" value={this.state.input} onChange={(e)=>this.handleChange(e)}/>
          <input className="submitButton" type="submit" value="SUBMIT" onClick={()=>this.handleClick()}/>
        </div>
    );
  }
}
 
export default EnterUsername;