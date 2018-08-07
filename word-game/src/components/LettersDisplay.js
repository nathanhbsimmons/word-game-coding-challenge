import React, { Component } from 'react';
 
function LettersDisplay(props) {

    const letters = props.letters

        if(letters){
         return <p>{props.letters}</p>
        } else {
        return <div></div>
        }  
}
 
export default LettersDisplay;