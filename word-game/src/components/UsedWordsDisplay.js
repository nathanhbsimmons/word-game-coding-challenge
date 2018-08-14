import React, { Component } from 'react';
import fire from '../firebase/firebase';
 
class UsedWordsDisplay extends Component {
    

   renderUsedWords = (dbWords) => {
        
        
            dbWords.child('used').on('value', (snapshot)=>{
                return (
                    <div>{snapshot.val()}</div>
                )
            })  
    }
   
  render() {
    const dbWords = fire.database().ref('/words');
    return (
        <div>{this.renderUsedWords(dbWords)}</div>
    );
  }
}
 
export default UsedWordsDisplay;