import React, { Component }  from 'react';
import {Animated} from "react-animated-css";
 
function LettersDisplay(props) {
    
    const letters = props.letters

        if(letters){
            return props.letters.map((letter, i)=>{
                <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}>
                    <p key={i} className="letters">{letter}</p>
                </Animated>})
        } else {
            return <div className="emptyDiv"></div>
        }  
}
 
export default LettersDisplay;