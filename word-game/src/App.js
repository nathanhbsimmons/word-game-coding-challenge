import React, { Component } from 'react';
import './App.css';
import GenerateLettersButtonContainer from './containers/GenerateLettersButtonContainer';
import LettersDisplayContainer from './containers/LettersDisplayContainer';
import WordInputContainer from './containers/WordInputContainer';
import EnteredWordsDisplayContainer from './containers/EnteredWordsDisplayContainer';
import EnterUsername from './components/EnterUsername';
import StartTimerContainer from './containers/StartTimerContainer';




class App extends Component { 
  

  
  
  render(props) {
   
    return (
      <div className="App">
       
        
        <StartTimerContainer/>
        <GenerateLettersButtonContainer/>
        <LettersDisplayContainer/>
        <WordInputContainer/>
        <EnteredWordsDisplayContainer/>
        <EnterUsername/>
      </div>
    );
  }
}

export default App;
