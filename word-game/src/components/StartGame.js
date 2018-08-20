import React, { Component } from 'react';
import {createGame, checkForWinner, generateLetters} from '../scripts'

let interval
 
class StartGame extends Component {

    timer = () => this.props.count === 0 ? (clearInterval(interval), checkForWinner()) : this.props.setCount();
        
    timerControl = () => {
      if (this.props.count !== 60) {
        this.props.resetCount();
        this.props.resetWordsUsed();
        this.props.setError(null);
        clearInterval(interval);
      }
      clearInterval(interval)
      interval = setInterval(() => this.timer(), 1000);
    }
      
  render(props) {
    return (
        <div className="startButtonDiv" >
          <button className="startButton" onClick={()=>{this.timerControl(); this.props.generateLetters(generateLetters())}}>PLAY</button>
        </div>
    );
  }
}
 
export default StartGame;