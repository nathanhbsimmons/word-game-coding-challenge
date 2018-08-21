import React, { Component } from 'react';
import fire from '../firebase/firebase';
import firebase from 'firebase';
import {dbUserWords} from '../scripts.js';
import '../App.css';

class EnteredWordsDisplay extends Component {
    state = {
        username: null,
        count: 0
    }

    componentDidMount(){
        dbUserWords.child('user').on('value', (snap) => this.setState({ username: snap.val(),count: this.state.count +1 }))
    }
        
    renderUsername=()=>{
        if(this.state.username && this.state.count === 2){
            return <div className="username">{this.state.username}</div>
        } else {
            return <div></div>
        }
    }
    
    renderPlayerWords=(props)=>{
        const playersWords = this.props.playersWords
        if(playersWords){  
            return playersWords.map((word, i)=><div key={i}>{word}</div>)
           } else {
           return <div></div>
           }  
    }

    render(props) {
        return(
            <div>
            {this.renderUsername()}
            {this.renderPlayerWords()}
            </div>
        );
    }
}

export default EnteredWordsDisplay
 