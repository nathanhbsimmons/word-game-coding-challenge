import React, { Component } from 'react';
import fire from '../firebase/firebase';
import firebase from 'firebase';
import {dbUserWords} from '../scripts.js'



class EnteredWordsDisplay extends Component {
    state = {
        username: null
    }

    componentDidMount(){
        dbUserWords.child('user').on('value', snap => {
            this.setState({
                username: snap.val()
            })
        })
    }
    

    renderUsername=()=>{
        if(this.state.username){
            return <div>{this.state.username}</div>
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
 