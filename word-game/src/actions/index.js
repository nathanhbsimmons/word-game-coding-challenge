export function setCount(count){
    return {
      type:"SET_COUNT",
      value: count
    }
  }
  
  export function generateLetters(){
    return {
      type:"GENERATE_LETTERS",
    }
  } 

  export function inputPlayersWord(word){
    return {
      type:"INPUT_PLAYERS_WORDS",
      value: word
    }
  }

  export function setWordsUsed(word){
    return {
      type:"SET_WORDS_USED",
      value: word
    }
  }

  
