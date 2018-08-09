




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


  
