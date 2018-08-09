import React, { Component } from 'react';
import {createUser} from '../scripts.js'
 
class EnterUsername extends Component {
 state = {
     input: ""
 }

 handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    console.log(this.state.input)
    createUser(this.state.input)
  }

  render() {
    return (
        <div>
        Create Username:
        <input type="text" onChange={(e)=>this.handleChange(e)}/>
        <input type="submit" value="submit" onClick={()=>this.handleClick()}/>

        </div>
    );
  }
}
 
export default EnterUsername;