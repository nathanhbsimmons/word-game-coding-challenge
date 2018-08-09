import React, { Component } from 'react';

let interval
 
class StartTimer extends Component {

    timer = () => {
        if(this.props.count === 0){
          clearInterval(interval)
        } else {
          this.props.setCount()
        }
      }
    
      startTimer = () => {
        interval = setInterval(() => this.timer(), 1000);
      }
      
        

  render(props) {
    return (
        <div>
        <h2>{this.props.count}</h2>
        <button onClick={()=>{this.startTimer()}}>Play</button>
        </div>
    );
  }
}
 
export default StartTimer;