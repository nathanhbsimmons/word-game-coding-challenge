import React, { Component } from 'react';
import fire from '../firebase/firebase';
import firebase from 'firebase';
import {checkLetters, updateDB, dbWordsUsed} from '../scripts.js'


class WordInput extends Component {

componentDidMount(){
    dbWordsUsed.on('value', snap => this.props.setWordsUsed(Object.values(snap.val())))
}

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
            updateDB(word)
        }
        e.target.value = ""
    }
}


renderInput=(props)=>{
    if(this.props.count === 0){
        return <div></div>
    } else {
        return <input  type="text" onKeyPress={(e)=>{this.checkWord(e)}}/>
    }
}

renderErrorMessage=(props)=>{
    let {error} = this.props
    if(error){
        return (<h2>{error}</h2>)
    } else {
        return <h2></h2>
    }
}

  render(props) {
    return (
        <div>
            {this.renderInput()}
            {this.renderErrorMessage()}
        </div>
    );
  }
}
 
export default WordInput;