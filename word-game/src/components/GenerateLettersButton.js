import React, { Component } from 'react';
 
function GenerateLettersButton(props) {
    return (
        <div>
        <button onClick={()=>{props.generateLetters()}}>Show me the letters!!</button>
        </div>
    );
}
 
export default GenerateLettersButton;