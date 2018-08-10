import React, { Component } from 'react';
import fire from '../firebase/firebase';
import firebase from 'firebase';
import {checkLetters, updateDB} from '../scripts.js'


 
class WordInput extends Component {

    state = {
        error: null
    }
    
    checkWord = (e, props, fire) => {
       
        if (e.key === 'Enter' && e.target.value !== ""){
            let word = e.target.value.toUpperCase();
        if((/([a-zA-Z]).*?\1/).test(word)){
            return this.setState({error: "Can't use letter more than once!"})
        } else if (this.props.wordsUsed.indexOf(word) !== -1){
            return this.setState({error: "Word has already been used!"})
        } else if (!checkLetters(word, this.props)) {
            return this.setState({error: "Must use letters above!"})
        } else {
            this.setState({error: null})
            this.props.inputPlayersWord(word)
            this.props.setWordsUsed(word)
            updateDB(word)
        }
    }   
    }

    

  render(props) {
    return (
        <div>
        
        <input  type="text" onKeyPress={(e)=>{this.checkWord(e)}}/>
        <h2>{this.state.error}</h2>
        </div>
    );
  }
}
 
export default WordInput;