import React from 'react';
 
function LettersDisplay(props) {
    
    const letters = props.letters

        if(letters){
            return props.letters.map((letter)=><p className="letters">{letter}</p>)
        } else {
            return <div className="emptyDiv"></div>
        }  
}
 
export default LettersDisplay;