import {combineReducers} from "redux";

function count(state = 0, action){
    if(action.type === "SET_COUNT"){
      //don't want to directly mutate state, thus no state++
      return state -1;
    }
    return state;
}

function letters(state = [], action){
  if(action.type === "SET_LETTERS"){
    return action.value;
  }
  return state;
}

function wordsUsed(state = [], action){
  if(action.type === "SET_WORDS_USED"){
    return action.value;
  }
  return state;
}

function playersWords(state = [], action){
  if(action.type === "SET_PLAYERS_WORDS"){
    return action.value;
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