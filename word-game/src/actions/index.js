
export function setCount(){
    return {
      type:"SET_COUNT"
    }
  }

  export function resetCount(){
    return {
      type:"RESET_COUNT"
    }
  }
  
  export function generateLetters(letters){
    return {
      type:"GENERATE_LETTERS",
      value: letters
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

  export function resetWordsUsed(){
    return {
      type:"RESET_WORDS_USED"
    }
  }

  export function setError(error){
    return {
      type:"SET_ERROR",
      value: error
    }
  }

  export function setWinner(user){
    return {
      type:"SET_WINNER",
      value: user
    }
  }



  // export function inputPlayersWordDB(word, fire){
    
    
  //   // const dbUserWords = fire.database().ref('/users');
  //   // dbUserWords.update({"user1": word})
  //   // dbUserWords.child('words').on('value', (snapshot)=>console.log(snapshot.val()))
  // }

  // export function inputWordsUsedDB(word, fire){
  //   // const dbWords = fire.database().ref('/words');
  //   // dbWords.update({"used": word})
  //   // dbWords.child('used').on('value', (snapshot)=>console.log(snapshot.val()))
  // }


  
