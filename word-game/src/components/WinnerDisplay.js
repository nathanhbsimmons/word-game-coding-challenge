import React from 'react';
 
function WinnerDisplay(props) {
    let {winner} = this.props
    if(winner !== null){
  return (<div> 
            <h1>{winner} is the winner!!</h1>
          </div>)
  } else {
      return <div></div>
  }
}

export default WinnerDisplay;