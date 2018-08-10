import React from 'react';
 
function Timer(props) {
  return (<div> 
            <h3>TIME</h3>
            <h2>{props.count}</h2>
          </div>)
}
 
export default Timer;