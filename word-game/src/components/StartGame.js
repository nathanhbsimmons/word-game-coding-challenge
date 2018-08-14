import React, { Component } from 'react';
import {createGame} from '../scripts'

let interval
 
class StartGame extends Component {

    timer = () => {
      if (this.props.count === 0) {
        clearInterval(interval)
      } else {
        this.props.setCount()
      }
    }

    startTimer = () => {
      if (this.props.count !== 60) {
        this.props.resetCount()
        this.props.resetWordsUsed()
        this.props.setError(null)
        clearInterval(interval)
      }
      clearInterval(interval)
      interval = setInterval(() => this.timer(), 1000);
    }
      
  render(props) {
    return (
        <div className="startButtonDiv" >
          <button className="startButton" onClick={()=>{this.startTimer(); this.props.generateLetters(); createGame()}}>PLAY</button>
        </div>
    );
  }
}
 
export default StartGame;