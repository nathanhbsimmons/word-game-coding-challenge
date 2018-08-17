import React, { Component } from 'react';
import {createGame, checkForWinner, generateLetters} from '../scripts'

let interval
 
class StartGame extends Component {

    timer = () => {
      if (this.props.count === 0) {
        clearInterval(interval);
        checkForWinner();
      } else {
        this.props.setCount();
      }
    }

    startTimer = () => {
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
          <button className="startButton" onClick={()=>{this.startTimer(); this.props.generateLetters(generateLetters())}}>PLAY</button>
        </div>
    );
  }
}
 
export default StartGame;