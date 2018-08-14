import React from 'react';

function EnteredWordsDisplay(props) {

    const playersWords = props.playersWords
    
        if(playersWords){  
         return playersWords.map((word, i)=><div key={i}>{word}</div>)
        } else {
        return <div></div>
        }  
}

export default EnteredWordsDisplay
 