import React, { Component } from 'react';
import './App.css';

class App extends Component {
  


  startTimer = () => {
    console.log("timer started")
    setInterval(() => this.props.setCount(), 1000);
    ;
  };
  
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{this.props.count}</h2>
        <button onClick={()=>{this.startTimer()}}>Play</button>
      </div>
    );
  }
}

export default App;
