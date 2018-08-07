import {combineReducers} from "redux";

function count(state = 0, action){
    if(action.type === "SET_COUNT"){
      //don't want to directly mutate state, thus no state++
      return state -1;
    }
    return state;
}

// function sites(state = [], action){
//   if(action.type === "SITES_FETCHED"){
//     return action.value;
//   }
//   return state;
// }



  const rootReducer = combineReducers({
    count
  });
  export default rootReducer;