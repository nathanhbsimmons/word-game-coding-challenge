import React, { Component } from 'react';
import './App.css';
import GenerateLettersButtonContainer from './containers/GenerateLettersButtonContainer';
import LettersDisplayContainer from './containers/LettersDisplayContainer';
import WordInputContainer from './containers/WordInputContainer';
import EnteredWordsDisplayContainer from './containers/EnteredWordsDisplayContainer';
import EnterUsername from './components/EnterUsername';
import StartTimerContainer from './containers/StartTimerContainer';
import UsedWordsDisplay from './components/UsedWordsDisplay';
import TimerContainer from './containers/TimerContainer';





class App extends Component { 
  

  
  
  render(props) {
   
    return (
      <div className="App">
       
        
        <StartTimerContainer/>
        <TimerContainer/>
        <GenerateLettersButtonContainer/>

          <div className="lettersContainer">
            <LettersDisplayContainer/>
          </div>
        
        <WordInputContainer/>
        <EnteredWordsDisplayContainer/>
        <EnterUsername/>
        <UsedWordsDisplay/>
      </div>
    );
  }
}

export default App;
