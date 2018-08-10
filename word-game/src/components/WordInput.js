import React, { Component } from 'react';
import fire from '../firebase/firebase';
import firebase from 'firebase';
import {checkLetters, updateDB} from '../scripts.js'


 
class WordInput extends Component {

checkWord = (e, props, fire) => {
    if (e.key === 'Enter' && e.target.value !== "") {
        let word = e.target.value.toUpperCase();
        if ((/([a-zA-Z]).*?\1/).test(word)) {
            return this.props.setError("Can't use letter more than once!")
          
        } else if (this.props.wordsUsed.indexOf(word) !== -1) {
            return this.props.setError("Word has already been used!")
            
        } else if (!checkLetters(word, this.props)) {
            return this.props.setError("Must use letters above!")
          
        } else {  
            this.props.setError(null)
            this.props.inputPlayersWord(word)
            this.props.setWordsUsed(word)
            updateDB(word)
        }
        e.target.value = ""
    }
}
renderErrorMessage=(props)=>{
    let error = this.props.error
    if(error){
        return (<h2>{error}</h2>)
    } else {
        return <h2></h2>
    }
}
  render(props) {
    return (
        <div>
            <input  type="text" onKeyPress={(e)=>{this.checkWord(e)}}/>
            {this.renderErrorMessage()}
        </div>
    );
  }
}
 
export default WordInput;