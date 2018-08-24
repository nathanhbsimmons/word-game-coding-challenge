import React, { Component } from 'react';
import './App.css';
import LettersDisplayContainer from './containers/LettersDisplayContainer';
import WordInputContainer from './containers/WordInputContainer';
import EnteredWordsDisplayContainer from './containers/EnteredWordsDisplayContainer';
import EnterUsername from './components/EnterUsername';
import StartGameContainer from './containers/StartGameContainer';
import UsedWordsDisplay from './components/UsedWordsDisplay';
import CounterContainer from './containers/CounterContainer';
import WinnerDisplayContainer from './containers/WinnerDisplayContainer'

class App extends Component { 

  renderMain=()=>{
    let {winner} = this.props
    if(winner !== null){
      return <WinnerDisplayContainer/>
    } else {
      return (<div>
        <div className="lettersContainer">
          <LettersDisplayContainer/>
        </div>
      
        <div className="wordsContainer">
          <WordInputContainer/>
          <EnteredWordsDisplayContainer/>
          <UsedWordsDisplay/>
        </div>
      </div>) 
    }
  }

  render(props) {
   
    return (
      <div className="App">
       
        <header>
          <h1>SCROGGLE</h1>  
          <CounterContainer/>
        </header>
        
        <EnterUsername/>
        
        {this.renderMain()}
       
        <div className="startContainer">
          <StartGameContainer/>
        </div>
        
        <footer>
          <h5>Race against the clock and your opponents to discover as many words as you can out of the 9 random letters given! 
          You will have 60 seconds. Letters will be given and time will begin when you press the "PLAY" button above. 
          Type words into input above and hit the "Enter" key to submit. Words can only be used once and letters cannot be used twice in a word.</h5>
        </footer>
    
      </div>
    );
  }
}

export default App;
