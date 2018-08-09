import {combineReducers} from "redux";


function count(state = 0, action){
    if(action.type === "SET_COUNT"){
      //don't want to directly mutate state, thus no state++
      return state -1;
    }
    return state;
}

function letters(state = [], action){
  if(action.type === "GENERATE_LETTERS"){
      let vowelArr = [];
      let consArr = [];
      let anyArr = []
      
      const possibleVowels = "AEIOU";
      const possibleCons = "BCDFGHJKLMNPQRSTVWXYZ";
      const possibleAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < 2; i++){
        vowelArr.push(possibleVowels.charAt(Math.floor(Math.random() * possibleVowels.length)));
      }
      for (let i = 0; i < 2; i++){
        consArr.push(possibleCons.charAt(Math.floor(Math.random() * possibleCons.length)));
      }
      for (let i = 0; i < 5; i++){
        anyArr.push(possibleAll.charAt(Math.floor(Math.random() * possibleAll.length)));
      }

    return consArr.concat(anyArr, vowelArr)
  }
  return state;
}

function wordsUsed(state = [], action){
  if(action.type === "SET_WORDS_USED"){
    
    return [...state, action.value];
  }
  return state;
}

function playersWords(state = [], action){
  if(action.type === "INPUT_PLAYERS_WORDS"){
    
  
    return [...state, action.value];
  }
  return state;
}

function error(state = "", action){
  if(action.type === "SET_ERROR"){
    return action.value;
  }
  return state;
}





  const rootReducer = combineReducers({
    count, letters, wordsUsed, playersWords, error
  });
  export default rootReducer;