import {combineReducers} from "redux";

function count(state = 0, action) {
  if (action.type === "SET_COUNT") {
    return state - 1;
  }
  if (action.type === "RESET_COUNT") {
    return state = 60;
  }
  return state;
}

function letters(state = [], action) {
  if (action.type === "GENERATE_LETTERS") {
   
    return action.value
  }
  return state;
}

function wordsUsed(state = [], action) {
  if (action.type === "SET_WORDS_USED") {
    return action.value;
  }
  if (action.type === "RESET_WORDS_USED") {
    return state = [];
  }
  return state;
}

function playersWords(state = [], action) {
  if (action.type === "INPUT_PLAYERS_WORDS") {
    return [...state, action.value];
  }
  if (action.type === "RESET_WORDS_USED") {
    return state = [];
  }
  return state;
}

function error(state = "", action) {
  if (action.type === "SET_ERROR") {
    return action.value;
  }
  return state;
}

function winner(state = "", action) {
  if (action.type === "SET_WINNER") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({count, letters, wordsUsed, playersWords, error, winner});

export default rootReducer;