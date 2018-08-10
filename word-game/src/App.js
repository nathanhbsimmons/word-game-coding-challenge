import React, { Component } from 'react';
import './App.css';
import LettersDisplayContainer from './containers/LettersDisplayContainer';
import WordInputContainer from './containers/WordInputContainer';
import EnteredWordsDisplayContainer from './containers/EnteredWordsDisplayContainer';
import EnterUsername from './components/EnterUsername';
import StartGameContainer from './containers/StartGameContainer';
import UsedWordsDisplay from './components/UsedWordsDisplay';
import TimerContainer from './containers/TimerContainer';

//Basic structure of game is there. App is able to write users and users words to Firebase Realtime Database, however I did not have time to finish
//setting up full database functionality. I know how to create a multiplayer realtime experience using node/express/mongoDB and backend code, but doing 
//it using only front end and Firebase was a but of a learning curve. Given more time, I would complete the gameplay by having a shared link where players can create their username and join the game. 
//Each username would be displayed on the page with a list underneath of the words they've entered. Check for win would be triggered when the countdown timer reached 0, simply checking each users
//arrays of words they entered and evaluating who had the longest array, then displaying the winner. Even though the official time is over for creating this App, I look forward to finishing this on my
//own time in order to further familiarize myself with Firebase and increase my database management skills. This was an awesome, interesting and challenging coding interview challenge and I really appreciate
//opportunity to learn, be challenged and show you some of what I can create. I'd love feedback if you have the time to give it!



class App extends Component { 
  render(props) {
   
    return (
      <div className="App">
       
        <header>
          <h1>SCROGGLE</h1>  
          <TimerContainer/>
        </header>
        
        <EnterUsername/>
        
        <div className="lettersContainer">
          <LettersDisplayContainer/>
        </div>
        
        <div className="wordsContainer">
          <WordInputContainer/>
          <EnteredWordsDisplayContainer/>
          <UsedWordsDisplay/>
        </div>
       
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
