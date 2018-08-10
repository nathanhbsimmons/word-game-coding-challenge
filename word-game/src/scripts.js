
import fire from './firebase/firebase';

export const gameRef = fire.database().ref("/games");
export const dbUser = fire.database().ref('/users');
export const dbUserWords = fire.database().ref('/users');
export const dbWords = fire.database().ref('/words');



export const createUser=(user)=>{
    dbUser.update({"username": user})
}

export const createGame=(user)=>{
    
    let currentGame = {
        creator: {uid: user.uid, displayName: user.displayName},
    }
    gameRef.push().set(currentGame)
}

export const updateDB=(word)=>{
    dbWords.update({"used": word})
    dbUserWords.update({"user1": word})
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

