
import fire from './firebase/firebase';

export const gameRef = fire.database().ref("/games");
export const dbUser = fire.database().ref('/games/game/users');
export const dbUserWords = fire.database().ref('/games/game/user');
export const dbWords = fire.database().ref('/words').child('used');



export const createUser=(user)=>{
    dbUser.update({"username": user})
}

export const createGame=(user)=>{
    
    let currentGame = {
        game: {user: {user: "", words: ""}},
    }
    gameRef.set(currentGame)
}

export const updateDB=(word)=>{
    dbWords.push(word)
    dbUserWords.child('words').push(word)
}



export const checkForWinner=()=>{

}

export const checkLetters = (word, props) => {
    let validWord = true

    for(let i=0; i <= word.length - 1; i++){  
        if(props.letters.toString().split(word[i]).length - 1 === 0){
            validWord = false
        }
    }
    return validWord
}

