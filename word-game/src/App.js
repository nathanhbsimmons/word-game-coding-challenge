import React, { Component } from 'react';
import './App.css';
import GenerateLettersButtonContainer from './containers/GenerateLettersButtonContainer';
import LettersDisplayContainer from './containers/LettersDisplayContainer';

class App extends Component { 

  startTimer = () => {
    console.log("timer started")
    setInterval(() => this.props.setCount(), 1000);
    ;
  };
  
  render(props) {
    return (
      <div className="App">
       
        
        <h2>{this.props.count}</h2>
        <button onClick={()=>{this.startTimer()}}>Play</button>
        <GenerateLettersButtonContainer/>
        <LettersDisplayContainer/>
      </div>
    );
  }
}

export default App;
